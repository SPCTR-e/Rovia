
export const CATEGORY_COLORS: Record<string, string> = {
    sights: '#C9524A',
    mustSee: '#C9524A',
    restaurants: '#C4834A',
    museums: '#4A7EC4',
};

export const getCategoryColor = (category: string) => CATEGORY_COLORS[category] || CATEGORY_COLORS.sights;
