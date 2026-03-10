import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ParkingData } from '@/hooks/useParkingData';
import i18n from '@/i18n';
import React, { useState } from 'react';
import { ActivityIndicator, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ParkingRow = ({ parking, theme, onPress, isLast }: { parking: ParkingData, theme: any, onPress: () => void, isLast: boolean }) => {
    const isOpen = parking.etat_descriptif === 'Ouvert';
    const percentFree = parking.total > 0 ? (parking.libre / parking.total) : -1;

    // Determine the dot color based on availability rules:
    // green (>60% available), orange (10-60% available), red (<10% available) or gray (no data)
    let indicatorColor = theme.textMuted; // "gray (no data)" or closed

    if (isOpen && percentFree !== -1) {
        if (percentFree > 0.6) {
            indicatorColor = theme.success; // "green (>60% available)"
        } else if (percentFree >= 0.1) {
            indicatorColor = theme.warning; // "orange (10-60% available)"
        } else {
            indicatorColor = theme.error; // "red (<10% available)"
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={[
                styles.row,
                {
                    backgroundColor: theme.surface,
                    borderBottomWidth: isLast ? 0 : 1,
                    borderBottomColor: theme.border
                }
            ]}
        >
            <View style={styles.rowMain}>
                <View style={[styles.indicator, { backgroundColor: indicatorColor }]} />
                <Text style={[styles.rowText, { color: theme.text }]} numberOfLines={1}>
                    {parking.nom_parking.replace('Parking ', '')}
                </Text>
            </View>

            <View style={styles.rowInfo}>
                <Text style={[styles.rowText, { color: isOpen ? theme.text : theme.textMuted, marginRight: 8 }]}>
                    {isOpen ? `${parking.libre} ${i18n.t('spots')}` : i18n.t('closed')}
                </Text>
                <IconSymbol name="chevron.right" size={12} color={theme.textMuted} />
            </View>
        </TouchableOpacity>
    );
};

export function ParkingList({
    data,
    loading,
    error,
    lastUpdated,
    onViewMap,
    onSelectParking,
    onRetry
}: {
    data: ParkingData[],
    loading: boolean,
    error: string | null,
    lastUpdated: Date | null,
    onViewMap: () => void,
    onSelectParking: (parking: ParkingData) => void,
    onRetry: () => void
}) {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];
    const [isExpanded, setIsExpanded] = useState(false);

    if (loading && data.length === 0) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="small" color={theme.primary} />
                <Text style={[styles.loadingText, { color: theme.textSecondary }]}>{i18n.t('loadingParking')}</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centerContainer}>
                <Text style={[styles.errorText, { color: theme.error }]}>{error}</Text>
                <TouchableOpacity onPress={onRetry} style={styles.retryBtn}>
                    <IconSymbol name="arrow.clockwise" size={16} color={theme.primary} />
                    <Text style={[styles.retryText, { color: theme.primary }]}>{i18n.t('retry') || 'Retry'}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const sortedData = [...data].sort((a, b) => {
        if (a.etat_descriptif === 'Ouvert' && b.etat_descriptif !== 'Ouvert') return -1;
        if (a.etat_descriptif !== 'Ouvert' && b.etat_descriptif === 'Ouvert') return 1;
        return 0;
    });

    const displayData = isExpanded ? sortedData : sortedData.slice(0, 5);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={[styles.headerTitle, { color: theme.text }]}>{i18n.t('realTimeParking')}</Text>
                    {lastUpdated && (
                        <Text style={[styles.updatedText, { color: theme.textSecondary }]}>
                            {i18n.t('updated')} {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </Text>
                    )}
                </View>
                <TouchableOpacity
                    style={[styles.mapBtn, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}
                    onPress={onViewMap}
                >
                    <IconSymbol name="map.fill" size={16} color={theme.primary} />
                    <Text style={[styles.mapBtnText, { color: theme.primary }]}>{i18n.t('mapView') || 'Map'}</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.listContainer, { borderColor: theme.border }]}>
                {displayData.map((parking, index) => (
                    <ParkingRow
                        key={parking.nom_parking}
                        parking={parking}
                        theme={theme}
                        onPress={() => onSelectParking(parking)}
                        isLast={index === displayData.length - 1}
                    />
                ))}
            </View>

            {sortedData.length > 5 && (
                <TouchableOpacity
                    style={[styles.expandButton, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}
                    onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                        setIsExpanded(!isExpanded);
                    }}
                >
                    <Text style={[styles.expandText, { color: theme.text }]}>
                        {isExpanded ? i18n.t('showLess') : `${i18n.t('viewAll')} (${sortedData.length})`}
                    </Text>
                    <IconSymbol
                        name={isExpanded ? "chevron.up" : "chevron.down"}
                        size={16}
                        color={theme.text}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 16,
        paddingHorizontal: 4,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
    },
    updatedText: {
        fontSize: 12,
    },
    centerContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
    },
    loadingText: {
        marginTop: 8,
        fontSize: 12,
    },
    errorText: {
        fontSize: 14,
        marginBottom: 8,
    },
    retryBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    retryText: {
        fontSize: 14,
        fontWeight: '600',
    },
    listContainer: {
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 16,
    },
    rowMain: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 10,
    },
    rowText: {
        fontSize: 14,
        fontFamily: 'Outfit_400Regular',
    },
    rowInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    expandButton: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        gap: 8,
    },
    expandText: {
        fontSize: 14,
        fontWeight: '600',
    },
    mapBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        gap: 6,
    },
    mapBtnText: {
        fontSize: 12,
        fontWeight: '600',
    }
});
