import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
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

  // Load favorites from local storage when the component is mounted
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addToFavorites = (item: VideoItem) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, item];
      // Save favorites to local storage
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const removeFromFavorites = (item: VideoItem) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter(
        (favorite) => favorite.id !== item.id
      );
      // Save favorites to local storage
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
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
