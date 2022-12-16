import axios from "axios";

export const API_URL = `http://localhost:3001`; // Базовый УРЛ на сервер.

const $api = axios.create({
  credentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default $api;
