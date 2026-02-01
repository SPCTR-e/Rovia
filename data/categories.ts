export type Category = {
    id: string;
    nameKey: 'sights' | 'restaurants' | 'museums' | 'activities';
    color: string;
};

export const CATEGORIES: Category[] = [
    {
        id: 'sights',
        nameKey: 'sights',
        color: '#FFB3B3' 
    },
    {
        id: 'restaurants',
        nameKey: 'restaurants',
        color: '#FFE082' 
    },
    {
        id: 'museums',
        nameKey: 'museums',
        color: '#E1BEE7' 
    },
    {
        id: 'activities',
        nameKey: 'activities',
        color: '#B3E5FC' 
    }
];
