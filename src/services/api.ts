import axios from "axios";

let baseURL:string;

export const api = axios.create({
  baseURL: baseURL
})

api.interceptors.request.use((config) => {
  if (process.env.NODE_ENV === "development") {
    config.baseURL = "http://localhost:3000/api";
  } else {
    config.baseURL = "/api";
  }

  return config;
})