/* import React, { useContext, createContext, useState, ReactNode } from "react";

interface FavoriteContextNavProps {
  favoriteCount: number;
  UpdateFavoriteCount: (count: number) => void;
}

const FavoriteContextNav = createContext<FavoriteContextNavProps | undefined>(
  undefined
);

export const FavoritesNavProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favoriteCount, setfavoriteCount] = useState<number>(0);

  const UpdateFavoriteCount = (count: number) => {
    setfavoriteCount(count);
  };
  return (
    <FavoriteContextNav.Provider value={{ favoriteCount, UpdateFavoriteCount }}>
      {children}
    </FavoriteContextNav.Provider>
  );
};

export const useFavoritesContextNav = () => {
  const context = useContext(FavoriteContextNav);

  if (!context) {
    throw new Error("must inside the useProviderNav.Provider");
  }
};
 */
