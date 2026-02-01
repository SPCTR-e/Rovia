import { SightCard } from '@/components/SightCard';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { ACTIVITIES } from '@/data/activities';
import { MUSEUMS } from '@/data/museums';
import { RESTAURANTS } from '@/data/restaurants';
import { SIGHTS } from '@/data/sights';
import { useColorScheme } from '@/hooks/use-color-scheme';
import i18n, { tData } from '@/i18n';
import Mapbox from '@rnmapbox/maps';
import { useRouter } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, Image, Linking, Modal, Platform, Animated as RNAnimated, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { Easing, LinearTransition, SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CATEGORIES } from '@/data/categories';

export type ExploreContentProps = {
    category: string;
    setCategory: (cat: string) => void;
};


const getCategoryColor = (type: string) => {
    return CATEGORIES.find(c => c.nameKey === type)?.color || '#888';
};

const getCategoryIcon = (type: string) => {
    switch (type) {
        case 'sights': return 'star.fill';
        case 'restaurants': return 'fork.knife';
        case 'museums': return 'building.columns.fill';
        case 'activities': return 'figure.walk';
        default: return 'map.fill';
    }
};

const CITY_CENTER = [7.7506, 48.5818]; 
const ALSACE_CENTER = [7.70, 48.56]; 


const MapMarker = ({ item, isFocused, color, icon, onSelect }: any) => {
    
    const scaleAnim = useRef(new RNAnimated.Value(1)).current;

    useEffect(() => {
        RNAnimated.spring(scaleAnim, {
            toValue: isFocused ? 1.5 : 1,
            friction: 5,
            tension: 40,
            useNativeDriver: true, 
        }).start();
    }, [isFocused]);

    return (
        <Mapbox.PointAnnotation
            id={item.id}
            coordinate={[item.coordinates.longitude, item.coordinates.latitude]}
            title={item.name}
            onSelected={onSelect}
        >
            <RNAnimated.View style={[
                styles.marker,
                {
                    backgroundColor: color,
                    zIndex: isFocused ? 999 : 1,
                    transform: [{ scale: scaleAnim }]
                },
            ]}>
                <IconSymbol name={icon as any} size={14} color="#FFF" />
            </RNAnimated.View>
        </Mapbox.PointAnnotation>
    );
};

export function ExploreContent({ category, setCategory }: ExploreContentProps) {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    const [search, setSearch] = useState('');
    const [isMapVisible, setIsMapVisible] = useState(false);
    
    const [mapFilter, setMapFilter] = useState('all');
    const [selectedItem, setSelectedItem] = useState<any | null>(null);
    const [cameraCenter, setCameraCenter] = useState(CITY_CENTER);

    const allItems = useMemo(() => [
        ...(SIGHTS as any[]).map(i => ({ ...i, type: 'sights' })),
        ...(RESTAURANTS as any[]).map(i => ({ ...i, type: 'restaurants' })),
        ...(MUSEUMS as any[]).map(i => ({ ...i, type: 'museums' })),
        ...(ACTIVITIES as any[]).map(i => ({ ...i, type: 'activities' }))
    ], []);

    const normalize = (str: string) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";

    
    const checkSearchMatch = (item: any, searchInput: string) => {
        if (!searchInput) return true;

        const name = normalize(item.name);
        const location = normalize(item.location);
        const desc = normalize(item.description || item.shortDescription);
        const tagsMatch = item.tags && item.tags.some((t: string) => normalize(t).includes(searchInput));

        return name.includes(searchInput) ||
            location.includes(searchInput) ||
            desc.includes(searchInput) ||
            tagsMatch;
    };

    const filteredItems = useMemo(() => {
        const searchInput = normalize(search);

        if (!searchInput) {
            
            const filterCategory = category.toLowerCase();
            return allItems.filter(item => {
                
                const itemCat = (item.type || item.category || '').toLowerCase();
                return itemCat === filterCategory;
            });
        }

        
        return allItems.filter(item => checkSearchMatch(item, searchInput));
    }, [allItems, search, category]);

    
    const handleFilterChange = (newFilter: string) => {
        setMapFilter(newFilter);
        setSelectedItem(null);
        setCameraCenter(CITY_CENTER);
    };

    const handleDirections = (item: any) => {
        if (!item.coordinates) return;
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${item.coordinates.latitude},${item.coordinates.longitude}`;
        const label = item.name;
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        if (url) Linking.openURL(url);
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
            {}
            <FlatList
                data={filteredItems}
                keyExtractor={item => item.id}
                initialNumToRender={5}
                maxToRenderPerBatch={5}
                windowSize={5}
                removeClippedSubviews={true}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Text style={[styles.title, { color: theme.text }]}>
                            {category ? i18n.t(category as any) : i18n.t('exploreTitle')}
                        </Text>

                        <View style={styles.searchRow}>
                            <View style={[styles.searchBar, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
                                <TextInput
                                    placeholder={i18n.t('searchPlaceholder')}
                                    placeholderTextColor={theme.icon}
                                    style={[styles.searchInput, { color: theme.text }]}
                                    value={search}
                                    onChangeText={setSearch}
                                />
                            </View>
                            <TouchableOpacity
                                style={[styles.mapButton, { backgroundColor: theme.primary }]}
                                onPress={() => {
                                    setMapFilter('all');      
                                    setSelectedItem(null);    
                                    setCameraCenter(CITY_CENTER); 
                                    setIsMapVisible(true);
                                }}
                            >
                                <IconSymbol name="map.fill" size={20} color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                renderItem={({ item }) => (
                    <SightCard
                        sight={item}
                        onPress={() => router.push(`/sight/${item.id}` as any)}
                    />
                )}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                key={`grid-2`} 
            />

            {}
            <Modal
                visible={isMapVisible}
                animationType="fade"
                presentationStyle="overFullScreen"
                onRequestClose={() => setIsMapVisible(false)}
            >
                <View style={{ flex: 1, backgroundColor: theme.background }}>
                    <View style={{ flex: 1 }}>
                        <Mapbox.MapView
                            style={{ flex: 1 }}
                            styleURL={Mapbox.StyleURL.Street}
                            onPress={() => setSelectedItem(null)} 
                        >
                            <Mapbox.Camera
                                defaultSettings={{
                                    centerCoordinate: ALSACE_CENTER,
                                    zoomLevel: 9
                                }}
                                zoomLevel={selectedItem ? 15 : 13}
                                centerCoordinate={cameraCenter}
                                animationMode="flyTo"
                                animationDuration={1000}
                            />

                            {}
                            {allItems.map((item) => {
                                const isCategoryMatch = mapFilter === 'all' || mapFilter === item.type;

                                
                                const searchInput = normalize(search);
                                const isSearchMatch = checkSearchMatch(item, searchInput);

                                
                                if (!isCategoryMatch || !isSearchMatch || !item.coordinates) return null;

                                const color = getCategoryColor(item.type);
                                const isFocused = selectedItem?.id === item.id;
                                const icon = getCategoryIcon(item.type);

                                return (
                                    <MapMarker
                                        key={`${item.id}-${item.type}`}
                                        item={item}
                                        isFocused={isFocused}
                                        color={color}
                                        icon={icon}
                                        onSelect={() => {
                                            setSelectedItem(item);
                                            setCameraCenter([item.coordinates!.longitude, item.coordinates!.latitude]);
                                        }}
                                    />
                                );
                            })}
                        </Mapbox.MapView>

                        {}
                        {}
                        <TouchableOpacity
                            style={[
                                styles.floatingCloseBtn,
                                { backgroundColor: theme.cardBackground, shadowColor: '#000' }
                            ]}
                            onPress={() => setIsMapVisible(false)}
                        >
                            <IconSymbol name="xmark" size={20} color={theme.text} />
                        </TouchableOpacity>

                        {}
                        <View style={[
                            styles.mapSearchPill,
                            { backgroundColor: theme.cardBackground, borderColor: theme.border }
                        ]}>
                            <IconSymbol name="magnifyingglass" size={18} color={theme.icon} />
                            <TextInput
                                placeholder={i18n.t('searchPlaceholder')}
                                placeholderTextColor={theme.icon}
                                style={[styles.mapSearchInput, { color: theme.text }]}
                                value={search}
                                onChangeText={setSearch}
                                returnKeyType="search"
                            />
                            {search.length > 0 && (
                                <TouchableOpacity onPress={() => setSearch('')} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                                    <IconSymbol name="xmark.circle.fill" size={16} color={theme.icon} />
                                </TouchableOpacity>
                            )}
                        </View>

                        {}
                        {!selectedItem && isMapVisible && (
                            <Animated.View
                                style={styles.filterContainer}
                                pointerEvents="box-none"
                                entering={SlideInDown.delay(100).duration(400).easing(Easing.out(Easing.exp))}
                                exiting={SlideOutDown.duration(300)}
                                layout={LinearTransition}
                            >
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
                                    {['all', 'sights', 'restaurants', 'museums', 'activities'].map((f) => {
                                        const isActive = mapFilter === f;
                                        const color = f === 'all' ? '#222' : getCategoryColor(f);
                                        const activeBg = f === 'all' ? '#222' : color;

                                        return (
                                            <TouchableOpacity
                                                key={f}
                                                style={[
                                                    styles.filterChip,
                                                    {
                                                        backgroundColor: isActive ? activeBg : theme.cardBackground,
                                                        borderColor: activeBg,
                                                        borderWidth: 1,
                                                        zIndex: 101, 
                                                        elevation: 101
                                                    }
                                                ]}
                                                onPress={() => handleFilterChange(f)}
                                            >
                                                <Text style={[
                                                    styles.filterText,
                                                    { color: isActive ? '#FFF' : (f === 'all' ? theme.text : color) }
                                                ]}>
                                                    {f === 'all' ? 'All' : i18n.t(f as any)}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </ScrollView>
                            </Animated.View>
                        )}

                        {selectedItem && isMapVisible && (
                            <Animated.View
                                style={[styles.infoCardContainer]}
                                entering={SlideInDown.duration(400).easing(Easing.out(Easing.exp))}
                                exiting={SlideOutDown.duration(200)}
                            >
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={[styles.mapCard, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}
                                    onPress={() => {
                                        
                                        
                                        router.push(`/sight/${selectedItem.id}` as any);
                                    }}
                                >
                                    {}
                                    <View style={styles.mapCardImageContainer}>
                                        <Image source={selectedItem.image} style={styles.mapCardImage} />
                                    </View>

                                    {}
                                    <View style={styles.mapCardContent}>
                                        <View style={styles.mapCardHeader}>
                                            <Text style={[styles.mapCardTitle, { color: theme.text }]} numberOfLines={1}>
                                                {tData(selectedItem, 'name')}
                                            </Text>
                                        </View>
                                        <Text style={[styles.mapCardDesc, { color: theme.icon }]} numberOfLines={2}>
                                            {tData(selectedItem, 'shortDescription')}
                                        </Text>

                                        <View style={styles.mapCardFooter}>
                                            <View style={[styles.miniChip, { backgroundColor: getCategoryColor(selectedItem.type) }]}>
                                                <Text style={styles.miniChipText}>{i18n.t(selectedItem.type as any).toUpperCase()}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', gap: 12 }}>
                                                {}
                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.cardBackground, padding: 6, borderRadius: 8, borderWidth: 1, borderColor: theme.border }}
                                                    onPress={(e) => {
                                                        e.stopPropagation();
                                                        handleDirections(selectedItem);
                                                    }}
                                                >
                                                    <IconSymbol name="location.fill" size={14} color={theme.text} />
                                                    <Text style={{ color: theme.text, fontSize: 12, fontWeight: '600', marginLeft: 4 }}>{i18n.t('go')}</Text>
                                                </TouchableOpacity>

                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={{ color: theme.primary, fontWeight: '600', fontSize: 13, marginRight: 2 }}>{i18n.t('more')}</Text>
                                                    <IconSymbol name="chevron.right" size={16} color={theme.primary} />
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                    {}
                                    <TouchableOpacity
                                        style={[styles.cardCloseBtn, { backgroundColor: theme.background }]}
                                        onPress={(e) => {
                                            e.stopPropagation(); 
                                            setSelectedItem(null);
                                        }}
                                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                    >
                                        <IconSymbol name="xmark" size={16} color={theme.text} />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </Animated.View>
                        )}
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 12,
        paddingBottom: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        marginBottom: 16,
        fontFamily: 'System',
    },
    searchRow: {
        flexDirection: 'row',
        gap: 10,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 48,
        borderRadius: 12,
        borderWidth: 1,
    },
    mapButton: {
        width: 48,
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    listContent: {
        padding: 12,
        paddingTop: 0,
        paddingBottom: 120, 
    },
    columnWrapper: {
        justifyContent: 'space-between', 
    },
    modalHeader: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        padding: 4,
    },
    filterContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        zIndex: 100, 
        elevation: 100,
    },
    filterScroll: {
        paddingHorizontal: 20,
        paddingVertical: 12, 
        gap: 10,
    },
    filterChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        
    },
    filterText: {
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    marker: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#FFF',
        paddingTop: 0,
    },
    markerInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#FFF'
    },
    infoCardContainer: {
        position: 'absolute',
        bottom: 50, 
        left: 16,
        right: 16,
        zIndex: 200,
        elevation: 200,
    },
    mapCard: {
        flexDirection: 'row',
        height: 120, 
        borderRadius: 16,
        borderWidth: 1,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 10,
    },
    mapCardImageContainer: {
        width: 110,
        height: '100%',
    },
    mapCardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    mapCardContent: {
        flex: 1,
        padding: 12,
        justifyContent: 'space-between',
    },
    mapCardHeader: {
        paddingRight: 20, 
    },
    mapCardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    mapCardDesc: {
        fontSize: 12,
        lineHeight: 16,
        marginBottom: 8,
    },
    mapCardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    miniChip: {
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 4,
    },
    miniChipText: {
        fontSize: 10,
        fontWeight: '700',
        color: '#222',
        letterSpacing: 0.5,
    },
    cardCloseBtn: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        opacity: 0.9,
    },
    floatingCloseBtn: {
        position: 'absolute',
        top: 50, 
        left: 20,
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 150,
        elevation: 150,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    mapSearchPill: {
        position: 'absolute',
        top: 50,
        left: 74, 
        right: 20,
        height: 44,
        borderRadius: 22,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 5,
        borderWidth: 1,
    },
    mapSearchInput: {
        flex: 1,
        fontSize: 16,
        marginLeft: 8,
        height: '100%',
        paddingVertical: 0,
    }
});
