import axios from "axios"
import { BASE_API_URL } from "./constants"

const BASE_URL = BASE_API_URL // Replace with your actual API base URL

let tokenPass = "";
if (typeof window !== "undefined") {
  tokenPass = "Bearer " + localStorage.getItem("j_access_token");
  axios.defaults.headers.common["J-authorization"] = tokenPass;
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "J-authorization": tokenPass,
  },
})

// =============================
// ⏱️  RESPONSE TIME LOGGER
// =============================

// Add request interceptor
axiosInstance.interceptors.request.use((config) => {
   return config;
});

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    if (response) {

    }
    return response;
  },
  (error) => {

    return Promise.reject(error);
    console.log(
      `%c⛔ API Error Response Time  ms | ${error.config?.url}`,
      "color: red; font-weight: bold;"
    );

    // return Promise.reject(error);
    return error;
  }
);

// Optionally, add interceptors here if needed
// axiosInstance.interceptors.request.use(...)
// axiosInstance.interceptors.response.use(...)
