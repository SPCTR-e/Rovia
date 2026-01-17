import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ParkingData } from '@/hooks/useParkingData';
import i18n from '@/i18n';
import React, { useState } from 'react';
import { ActivityIndicator, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ParkingCard = ({ parking, theme, onPress }: { parking: ParkingData, theme: any, onPress: () => void }) => {
    // Determine status color
    // If closed -> Gray/Red
    // If < 10% free -> Red
    // If < 30% free -> Orange
    // Else -> Green

    const isOpen = parking.etat_descriptif === 'Ouvert';
    const percentFree = parking.total > 0 ? (parking.libre / parking.total) : 0;
    const occupancyPercent = 1 - percentFree;

    let statusColor = theme.success; // Default Green
    let statusText = i18n.t('available');

    if (!isOpen) {
        statusColor = theme.textSecondary;
        statusText = i18n.t('closed');
    } else if (parking.libre === 0) {
        statusColor = theme.error; // Red
        statusText = i18n.t('full');
    } else if (percentFree < 0.1) {
        statusColor = theme.error; // Red
        statusText = i18n.t('nearlyFull');
    } else if (percentFree < 0.3) {
        statusColor = '#FFA500'; // Orange
        statusText = i18n.t('busy');
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={[styles.card, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}
        >
            <View style={styles.cardHeader}>
                <Text style={[styles.cardTitle, { color: theme.text }]} numberOfLines={1}>
                    {parking.nom_parking.replace('Parking ', '')}
                </Text>
                {isOpen && (
                    <Text style={[styles.spotCount, { color: statusColor }]}>
                        {parking.libre} {i18n.t('spots')}
                    </Text>
                )}
            </View>

            {/* Progress Bar */}
            <View style={[styles.progressTrack, { backgroundColor: theme.border }]}>
                <View
                    style={[
                        styles.progressBar,
                        {
                            width: `${occupancyPercent * 100}%`,
                            backgroundColor: statusColor
                        }
                    ]}
                />
            </View>

            <View style={styles.cardFooter}>
                <View style={[styles.badge, { backgroundColor: statusColor + '20' }]}>
                    <Text style={[styles.badgeText, { color: statusColor }]}>
                        {isOpen ? statusText : i18n.t('closed')}
                    </Text>
                </View>
                {!isOpen && (
                    <Text style={[styles.closedText, { color: theme.textSecondary }]}>
                        {parking.etat_descriptif}
                    </Text>
                )}
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

    // Sort: Open first, then by availability
    const sortedData = [...data].sort((a, b) => {
        if (a.etat_descriptif === 'Ouvert' && b.etat_descriptif !== 'Ouvert') return -1;
        if (a.etat_descriptif !== 'Ouvert' && b.etat_descriptif === 'Ouvert') return 1;
        return 0;
    });

    // Show only first 6 items unless expanded
    const displayData = isExpanded ? sortedData : sortedData.slice(0, 6);

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

            <View style={styles.grid}>
                {displayData.map((parking, index) => (
                    <View key={parking.nom_parking} style={styles.gridItem}>
                        <ParkingCard parking={parking} theme={theme} onPress={() => onSelectParking(parking)} />
                    </View>
                ))}
            </View>

            {sortedData.length > 6 && (
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
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -6, // Offset padding for grid
    },
    gridItem: {
        width: '50%', // 2 columns
        padding: 6,
    },
    card: {
        borderRadius: 16,
        padding: 12,
        borderWidth: 1,
        gap: 10,
    },
    cardHeader: {
        flexDirection: 'column',
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 2,
    },
    spotCount: {
        fontSize: 13,
        fontWeight: '700',
    },
    progressTrack: {
        height: 6,
        borderRadius: 3,
        width: '100%',
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        borderRadius: 3,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    closedText: {
        fontSize: 10,
        fontStyle: 'italic',
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
        marginHorizontal: 6,
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
