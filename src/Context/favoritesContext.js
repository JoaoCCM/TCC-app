import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { findFavorites, removeFavorite } from "../api/user";

import Loading from "../components/Loading";

export const favoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteTeacher, setFavoriteTeacher] = useState([]);

  useEffect(() => {
    getUserFavorites();
  }, []);

  const getUserFavorites = async () => {
    setIsLoading(true);
    const sessionToken = await AsyncStorage.getItem("userData");

    if (!sessionToken) return setIsLoading(false);

    const token = sessionToken.replace(/"/g, "");
    setToken(token);

    const { data } = await findFavorites(token);

    const favoriteProf = data.reduce(
      (acc, {nome, email, id}, index) => [
        ...acc,
        { orderPosition: index + 1, id, nome, email },
      ],
      []
    );

    setFavoriteTeacher(favoriteProf);

    setIsLoading(false);
  };

  const removeFromFavorites = async (id) => {
    setIsLoading(true);

    const body = {
      body: { teacherInfo: { id } },
      token
    }

    const { status } = await removeFavorite(body);

    if(status === 200) removeTeacher(id)

    setIsLoading(false);
  };

  const addTeacher = (newTeacher) => {
    const newTeacherList = [...favoriteTeacher, newTeacher];
    setFavoriteTeacher(newTeacherList);
  };

  const removeTeacher = (id) => {
    const newTeacherList = favoriteTeacher.filter((teacher) => teacher.id !== id)

    setFavoriteTeacher(newTeacherList);
  };

  return isLoading ? (
    <Loading backgroundColor="rgba(0,0,0,0.2)" />
  ) : (
    <favoritesContext.Provider
      value={{
        addTeacher,
        removeFromFavorites,
        favoriteTeacher,
      }}
    >
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
