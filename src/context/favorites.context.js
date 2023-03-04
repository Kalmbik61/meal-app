import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  favorites: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (id) => {
    setFavorites((prev) => [...prev, id]);
  };
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item, i) => item !== id));
  };
  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoritesContextProvider;
