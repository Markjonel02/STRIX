/* import React, { createContext, useContext, useState, ReactNode } from "react";
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
 */
import React, { createContext, useContext, useState, ReactNode } from "react";
import { VideoItem } from "../pages/Movies";

interface FavoritesContextProps {
  favorites: VideoItem[];
  addToFavorites: (item: VideoItem) => void;
  removeFromFavorites: (item: VideoItem) => void;
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

  const removeFromFavorites = (item: VideoItem) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== item.id)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
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
