/* import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for your context
interface FavoritesContextType {
  favoriteVideos: number[];
  addToFavorites: (index: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

//prvoder to use the context created
export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favoriteVideos, setFavorites] = useState<number[]>([]);
  const addToFavorites = (itemId: number) => {
    setFavorites((preFavorites) => [...preFavorites, itemId]);
  };
  return (
    <FavoritesContext.Provider value={{ favoriteVideos, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
};
 */
import React, { createContext, useContext, useState, ReactNode } from "react";
import { VideoItem } from "../pages/Movies";

interface FavoritesContextProps {
  favorites: VideoItem[];
  addToFavorites: (item: VideoItem) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<VideoItem[]>([]);

  const addToFavorites = (item: VideoItem) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
