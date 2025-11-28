import axios from "axios"
import { BASE_API_URL } from "./constants"
import CryptoJS from "crypto-js"

const ENCRYPTION_KEY = 'har har mahadev';

function encryptData(data: any): any {
  const stringData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(stringData, ENCRYPTION_KEY).toString();
}

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

const BASE_URL = BASE_API_URL

let tokenPass = "";
if (typeof window !== "undefined") {
  tokenPass = "Bearer " + localStorage.getItem("token");
  axios.defaults.headers.common["J-authorization"] = tokenPass;
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "text/plain",
    "J-authorization": tokenPass,
  },
})

// Encrypt request data
axiosInstance.interceptors.request.use((config) => {
  // If header is_confirm is present and true, skip encryption
  const isConfirm = config.headers && (
    config.headers['is_confirm'] === true ||
    config.headers['is_confirm'] === 'true'
  );
  if (!isConfirm && config.data) {
    config.data = encryptData(config.data);
  }
  return config;
});

// Decrypt response data
axiosInstance.interceptors.response.use(
  (response) => {
    // If header is_confirm is present and true, skip decryption
    const isConfirm = response.config.headers && (
      response.config.headers['is_confirm'] === true ||
      response.config.headers['is_confirm'] === 'true'
    );
    if (!isConfirm && response && response.data) {
      try {
        if (typeof response.data === "string" && response.data.startsWith("U2FsdGVk")) {
          response.data = decryptData(response.data);
        }
      } catch {}
    }
    return response;
  },
  (error) => {
    if (error.response) {
      const isConfirm = error.response.config && error.response.config.headers && (
        error.response.config.headers['is_confirm'] === true ||
        error.response.config.headers['is_confirm'] === 'true'
      );
      if (!isConfirm) {
        try {
          if (typeof error.response.data === "string" && error.response.data.startsWith("U2FsdGVk")) {
            error.response.data = decryptData(error.response.data);
          }
        } catch {}
      }
    }
    if (error?.response?.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.href = "/home";
      return;
    }
    return Promise.reject(error);
  }
);

// Optionally, add interceptors here if needed
// axiosInstance.interceptors.request.use(...)
// axiosInstance.interceptors.response.use(...)
