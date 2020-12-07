import api from "./axios";

export const signIn = (body) => api.post("signIn", body);

export const findUser = (token) =>
    api.get("findUser", {
        headers: { Authorization: `bearer ${token}` },
    });
