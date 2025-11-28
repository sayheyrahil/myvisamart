import axios from "axios"
import { BASE_API_URL } from "./constants"
import CryptoJS from "crypto-js"

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "har har mahadev";

// Placeholder encryption/decryption functions using CryptoJS

function encryptData(data: any): any {
  // Encrypts the data as a string
  const stringData = typeof data === "string" ? data : JSON.stringify(data);
  return CryptoJS.AES.encrypt(stringData, ENCRYPTION_KEY).toString();
}

function decryptData(data: any): any {
  // Decrypts the data and parses JSON if possible
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

const BASE_URL = BASE_API_URL // Replace with your actual API base URL

let tokenPass = "";
if (typeof window !== "undefined") {
  tokenPass = "Bearer " + localStorage.getItem("token");
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

 

// =============================
// ⏱️  ENCRYPTION/DECRYPTION INTERCEPTORS
// =============================

// Encrypt request data
axiosInstance.interceptors.request.use((config) => {
  if (config.data) {
    config.data = encryptData(config.data);
  }
  return config;
});

// Decrypt response data
axiosInstance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      response.data = decryptData(response.data);
    }
    return response;
  },
  (error) => {
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
