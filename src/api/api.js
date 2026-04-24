import axios from "axios";
import { getToken } from "./auth";

// API Base URL - automatically handles development vs production
const API_BASE_URL = import.meta.env.PROD 
  ? "https://contesthub-akhi.vercel.app/api" 
  : "/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(config => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      // logout user or redirect to login
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

// Helper function for fetch API calls
export const apiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

export default api;
