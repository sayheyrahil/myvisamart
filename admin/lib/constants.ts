// local
export const WEB_URL = "http://localhost:2003";
export const BASE_API_URL = `${WEB_URL}/api/`;
export const API_URL = `${BASE_API_URL}admin/`;

// TinyMCE API key
export const TINY_MCE_API = 'm3pcelodpggvb0k2egnaqw2cc4j5zgt0dgwyb53jp70m7y6f'

export const adminKey = "admin/";
// API endpoints
export const ENDPOINTS = {
  login: "admin_login",
  logout: "logout",
  forget_password: "admin_forget_password",
  image_upload: BASE_API_URL + "image_upload",
  get_profile: "profile",
  update_profile: "profile_update",
  change_password: adminKey + "change_password",

 


  category_get:  adminKey +  "category/get",
  category_delete:  adminKey +  "category/delete",
  category_store:  adminKey +  "category/store",
  category_edit:  adminKey +  "category/edit_get",
  category_change_status:  adminKey +  "category/change_status",
 


  destination_get:  adminKey +  "destination/get",
  destination_delete:  adminKey +  "destination/delete",
  destination_store:  adminKey +  "destination/store",
  destination_edit:  adminKey +  "destination/edit_get",
  destination_change_status:  adminKey +  "destination/change_status",
 

 
  
}






