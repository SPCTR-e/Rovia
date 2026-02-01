import storage from '@/utils/storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const FAVORITES_KEY = 'user_favorites';

type FavoritesContextType = {
    favorites: string[];
    toggleFavorite: (id: string) => Promise<void>;
    isFavorite: (id: string) => boolean;
    reorderFavorites: (newOrder: string[]) => Promise<void>;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const stored = await storage.getItem(FAVORITES_KEY);
            if (stored) {
                setFavorites(JSON.parse(stored));
            }
        } catch (e) {
            console.error('Failed to load favorites', e);
        }
    };

    const toggleFavorite = async (id: string) => {
        try {
            const newFavorites = favorites.includes(id)
                ? favorites.filter(fav => fav !== id)
                : [...favorites, id];

            setFavorites(newFavorites);
            await storage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
        } catch (e) {
            console.error('Failed to toggle favorite', e);
        }
    };

    const reorderFavorites = async (newOrder: string[]) => {
        try {
            setFavorites(newOrder);
            await storage.setItem(FAVORITES_KEY, JSON.stringify(newOrder));
        } catch (e) {
            console.error('Failed to reorder favorites', e);
        }
    };

    const isFavorite = (id: string) => favorites.includes(id);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, reorderFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
}
