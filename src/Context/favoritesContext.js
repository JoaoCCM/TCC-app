import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { findFavorites, removeFavorite, addFavorite } from "../api/user";

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
      (acc, { nome, email, id, foto }) => [
        ...acc,
        { id, nome, email, foto },
      ],
      []
    );

    setFavoriteTeacher(favoriteProf);

    setIsLoading(false);
  };

  const removeFromFavorites = async (id) => {
    const body = {
      body: { teacherInfo: { id } },
      token
    }

    const { status } = await removeFavorite(body);

    if(status === 200) {
      const newTeacherList = favoriteTeacher.filter((teacher) => teacher.id !== id)

      setFavoriteTeacher(newTeacherList);
    }
  };

  const changeOrder = (newOrder) => setFavoriteTeacher(newOrder)


  const addTeacherAsFavorite = async (newTeacher, searchParams) => {

    const { id } = newTeacher

    const body = {
      body: {
        teacherInfo: { id },
        searchParams,
      },
      token
    }

    const { status } = await addFavorite(body);

    if(status === 200) {
      const newTeacherList = [...favoriteTeacher, newTeacher];

      setFavoriteTeacher(newTeacherList);
    }
  };

  return isLoading ? (
    <Loading backgroundColor="rgba(0,0,0,0.2)" />
  ) : (
    <favoritesContext.Provider
      value={{
        addTeacherAsFavorite,
        changeOrder,
        removeFromFavorites,
        favoriteTeacher,
      }}
    >
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
