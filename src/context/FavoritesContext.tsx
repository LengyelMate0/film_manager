import { useContext, createContext, useState, type ReactNode } from "react";

type FavoritesContextType = {
    favorites: string[];
    addFavorite: (title: string) => void;
    deleteFavorite: (title: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesPropType {
    children: ReactNode;

}

export const FavoritesProvider: React.FC<FavoritesPropType> = ({ children }) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    function addFavorite(title: string) {
        setFavorites(prev => prev.includes(title)
            ? prev
            : [...prev, title])
    };

    function deleteFavorite(title: string) {
        setFavorites(prev => prev.filter(t => t !== title));
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, deleteFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );

}

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error("Missing provider.");
    return context;
}