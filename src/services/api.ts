import axios from "axios";

const api = axios.create({ baseURL: "https://api.minibox.inolopesm.com" });

api.interceptors.response.use(
  (response) => response,
  (error) => {
    throw new Error(
      typeof error.response?.data?.message === "string"
        ? error.response.data.message
        : error.message
    );
  }
);

export default api;
