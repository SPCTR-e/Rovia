import { useCallback, useEffect, useState } from 'react';

export interface ParkingData {
    nom_parking: string;
    name: string;
    etat_descriptif: string;
    libre: number;
    total: number;
    position: {
        lon: number;
        lat: number;
    };
    point_geo: {
        lon: number;
        lat: number;
    };
    taux_occup: number;
    [key: string]: any;
}

const API_URL = 'https://data.strasbourg.eu/api/explore/v2.1/catalog/datasets/occupation-parkings-temps-reel/records?limit=40';

export function useParkingData() {
    const [data, setData] = useState<ParkingData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            
            
            const response = await fetch(`${API_URL}&_t=${Date.now()}`, {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'StrasbourgGuide/1.0'
                }
            });
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

            const json = await response.json();

            
            const parkings = json.results
                .map((record: any) => ({
                    ...record,
                    nom_parking: record.nom_parking,
                    name: record.nom_parking,
                    etat_descriptif: record.etat_descriptif,
                    libre: record.libre,
                    total: record.total,
                    position: record.position,
                    point_geo: record.position,
                    taux_occup: record.taux_occup
                }))
                
                .filter((p: any) => p.nom_parking && p.position && p.position.lon && p.position.lat);

            console.log(`[useParkingData] Fetched ${parkings.length} parking spots`);

            parkings.sort((a: ParkingData, b: ParkingData) => a.nom_parking.localeCompare(b.nom_parking));

            setData(parkings);
            setLastUpdated(new Date());
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch parking data');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 60000); 
        return () => clearInterval(interval);
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData, lastUpdated };
}
