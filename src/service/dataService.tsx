import axios, { AxiosInstance } from "axios";
import { v4 as uuidv4 } from "uuid";
import { getWithExpiry } from "~/utils/localStorage";

const base = import.meta.env.VITE_BASE_URL;

const api: AxiosInstance = axios.create({
  baseURL: base,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await getWithExpiry("s-scribe-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Generate a UUID v4 and set it in the request header
    const uuid = uuidv4();
    config.headers["x-idempotent-key"] = uuid;

    return config;
  },
  (error) => {
    throw error;
  },
);

export default api;
