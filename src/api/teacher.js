import api from "./axios";

export const getAreas = () => api.get("teacher/areas");
export const searchForTerms = (params) => api.get("/teacher/search", { params });
