import { useCallback, useEffect, useState } from 'react';

export interface ToiletData {
    name: string;
    address?: string;
    position: {
        lon: number;
        lat: number;
    };
    [key: string]: any;
}

const API_URL = 'https://data.strasbourg.eu/api/explore/v2.1/catalog/datasets/lieux_toilettes_publiques/records?limit=100';

export function useToiletsData() {
    const [data, setData] = useState<ToiletData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL, {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'StrasbourgGuide/1.0'
                }
            });
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

            const json = await response.json();
            console.log('[useToiletsData] Raw API Response:', json);
            if (json.results && json.results.length > 0) {
              console.log('[useToiletsData] First Result Object:', json.results[0]);
            }

            const toilets = json.results
                .filter((record: any) => record.point_geo != null)
                .map((record: any) => ({
                    ...record,
                    name: record.name,
                    address: record.address,
                    position: {
                        lon: record.point_geo.lon,
                        lat: record.point_geo.lat
                    }
                }));

            console.log(`[useToiletsData] Fetched ${toilets.length} toilets`);
            setData(toilets);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch toilets data');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
}
