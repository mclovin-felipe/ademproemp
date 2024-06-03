import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Asegúrate de definir esta variable en tu archivo .env.local
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
