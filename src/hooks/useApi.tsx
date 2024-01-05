import axios from "axios";

export const api = axios.create({
  // baseURL: process.env.REACT_APP_URL_API,
  baseURL: "http://localhost:3000/",
});

export const useApi = () => ({
  validate: async () => {
    const { data } = await api.get("user/me");

    return data;
  },
  signIn: async (email: string, password: string) => {
    const { data } = await api.post("user/signIn/", { email, password });

    api.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${data.token}`;
        return config;
      },
      (error) => {
        console.error(error);
      }
    );
    return data;
  },
});
