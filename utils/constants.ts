// local
export const WEB_URL = "http://localhost:2003";
export const BASE_API_URL = `${WEB_URL}/api/`;
export const API_URL = `${BASE_API_URL}admin/`;

// TinyMCE API key
export const TINY_MCE_API = 'm3pcelodpggvb0k2egnaqw2cc4j5zgt0dgwyb53jp70m7y6f'

export const adminKey = "admin/";

// API endpoints
export const ENDPOINTS = {
  login: "login",
  logout: "logout",
  forget_password: "forget_password",
  image_upload: BASE_API_URL + "image_upload",
  get_profile: "profile",
  update_profile: "profile_update",
  
  change_password: adminKey + "change_password",
 
  
}






