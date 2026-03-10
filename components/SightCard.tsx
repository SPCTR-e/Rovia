import { getCategoryColor } from '@/constants/categoryColors';
import { Colors } from '@/constants/theme';
import { Sight } from '@/data/sights';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useFavorites } from '@/hooks/use-favorites';
import i18n, { tData } from '@/i18n';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import React, { useRef } from 'react';
import { Animated, Image, Pressable, StyleSheet, View } from 'react-native';
import { ThemedText } from './themed-text';

type SightCardProps = {
    sight: Sight;
    onPress: () => void;
    style?: any;
};

export const SightCard = React.memo(({ sight, onPress, style }: SightCardProps) => {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];
    const scale = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scale, {
            toValue: 0.98,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    const { isFavorite, toggleFavorite } = useFavorites();
    const isFav = isFavorite(sight.id);

    const handleToggleFavorite = (e: any) => {
        e.stopPropagation();
        toggleFavorite(sight.id);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    };

    const accentColor = getCategoryColor(sight.category);

    // Shadow in dark mode only as per rules
    const shadowStyle = colorScheme === 'dark' ? {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    } : {
        elevation: 0, // No heavy visible borders/shadows in light mode by default
    };

    return (
        <Pressable
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={[styles.container, style]}
        >
            <Animated.View style={[
                styles.card,
                {
                    backgroundColor: theme.cardBackground,
                    transform: [{ scale }],
                    ...shadowStyle
                }
            ]}>
                {/* 4px Category Accent Border */}
                <View style={[styles.accentBorder, { backgroundColor: accentColor }]} />

                <View style={styles.innerContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={sight.image}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Pressable
                            onPress={handleToggleFavorite}
                            style={styles.favoriteBadge}
                        >
                            <Ionicons name={isFav ? "heart" : "heart-outline"} size={20} color={isFav ? "#FF4B4B" : "#FFF"} />
                        </Pressable>
                    </View>

                    <View style={styles.content}>
                        <ThemedText style={styles.categoryLabel} muted>
                            {i18n.t(sight.category).toUpperCase()}
                        </ThemedText>
                        <ThemedText style={styles.title} variant="body" numberOfLines={2}>
                            {tData(sight, 'name')}
                        </ThemedText>
                        <ThemedText style={styles.subtitle} muted numberOfLines={1}>
                            {tData(sight, 'shortDescription')}
                        </ThemedText>
                    </View>
                </View>
            </Animated.View>
        </Pressable>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 16,
        marginHorizontal: 8,
    },
    card: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
        height: 240,
    },
    accentBorder: {
        width: 4,
        height: '100%',
    },
    innerContainer: {
        flex: 1,
    },
    imageContainer: {
        height: '65%',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    content: {
        padding: 12,
        height: '35%',
        justifyContent: 'center',
    },
    categoryLabel: {
        fontSize: 12,
        marginBottom: 2,
    },
    title: {
        fontSize: 17,
        lineHeight: 22,
    },
    subtitle: {
        fontSize: 12,
        marginTop: 2,
    },
    favoriteBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 8,
        borderRadius: 20,
    }
});
