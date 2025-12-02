import axios from "axios";
import { BASE_API_URL } from "./constants";
import CryptoJS from "crypto-js";

// --------------------------------------------------
// Encryption Key
// --------------------------------------------------
const ENCRYPTION_KEY = "har har mahadev";

// --------------------------------------------------
// Encrypt Data
// --------------------------------------------------
function encryptData(data: any): string {
  const stringData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(stringData, ENCRYPTION_KEY).toString();
}

// --------------------------------------------------
// Decrypt Data
// --------------------------------------------------
function decryptData(data: any): any {
  try {
    const bytes = CryptoJS.AES.decrypt(data, ENCRYPTION_KEY);
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

    try {
      return JSON.parse(decryptedString);
    } catch {
      return decryptedString;
    }
  } catch {
    return data;
  }
}

// --------------------------------------------------
// Base Config
// --------------------------------------------------
const BASE_URL = BASE_API_URL;

// Token Setup
let tokenPass = "";
if (typeof window !== "undefined") {
  tokenPass = "Bearer " + localStorage.getItem("token");
  axios.defaults.headers.common["J-authorization"] = tokenPass;
}

// --------------------------------------------------
// Axios Instance
// --------------------------------------------------
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "text/plain;charset=utf-8",
    "J-authorization": tokenPass,
  },
  responseType: "text",               // ensure backend encrypted text arrives as raw string
  transformRequest: [(data) => data], // stop axios from JSON-parsing encrypted string
});

// --------------------------------------------------
// Encrypt Request Interceptor
// --------------------------------------------------
axiosInstance.interceptors.request.use((config) => {
  const isConfirm =
    config.headers?.is_confirm === true ||
    config.headers?.is_confirm === "true";

  if (!isConfirm && config.data) {
    config.data = encryptData(config.data); // final encrypted text
  }

  return config;
});

// --------------------------------------------------
// Decrypt Response Interceptor
// --------------------------------------------------
axiosInstance.interceptors.response.use(
  (response) => {
    const isConfirm =
      response.config.headers?.is_confirm === true ||
      response.config.headers?.is_confirm === "true";

    if (!isConfirm && typeof response.data === "string") {
      if (response.data.startsWith("U2FsdGVk")) {
        response.data = decryptData(response.data);
      }
    }
    return response;
  },

  // ------------------------
  // Error Handler
  // ------------------------
  (error) => {
    if (error.response) {
      const isConfirm =
        error.response.config?.headers?.is_confirm === true ||
        error.response.config?.headers?.is_confirm === "true";

      if (
        !isConfirm &&
        typeof error.response.data === "string" &&
        error.response.data.startsWith("U2FsdGVk")
      ) {
        try {
          error.response.data = decryptData(error.response.data);
        } catch {}
      }
    }

    // Unauthorized → logout user
    if (error?.response?.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.href = "/home";
      return;
    }

    return Promise.reject(error);
  }
);

