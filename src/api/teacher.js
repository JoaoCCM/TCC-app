import api from "./axios";

export const getAreas = () => api.get("teacher/areas");
