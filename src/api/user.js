import api from "./axios";

export const signIn = (body) => api.post("signIn", body);
export const signUp = (body) => api.post("user", body);

export const findUser = (token) =>
  api.get("findUser", {
    headers: { Authorization: `bearer ${token}` },
  });

export const findFavorites = (token) =>
  api.get("getFavorites", {
    headers: { Authorization: `bearer ${token}` },
  });

export const addFavorite = ({ body, token }) =>
  api.post("favorite", body, {
    headers: { Authorization: `bearer ${token}` },
  });

export const removeFavorite = ({ body, token }) =>
  api.post("unfavorite", body, {
    headers: { Authorization: `bearer ${token}` },
  });
