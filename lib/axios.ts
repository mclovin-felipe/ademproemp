import axios from "axios";
import { useSession } from "next-auth/react";
const useAxiosInstance = () => {
  const { data: session } = useSession();
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL as string, // Reemplaza con tu base URL
  });

  // Inyecta el token en las peticiones si está disponible
  axiosInstance.interceptors.request.use(
    (config) => {
      if (session?.accessToken) {
        config.headers.Authorization = `Bearer ${session.accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosInstance;
