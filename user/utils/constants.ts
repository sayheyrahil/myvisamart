// local
export const WEB_URL = "http://localhost:2003";
// export const WEB_URL = "https://www.admin.myvisamart.com/applicationinterface";

export const BASE_API_URL = `${WEB_URL}/api/`;
export const API_URL = `${BASE_API_URL}/admin/`;

// TinyMCE API key
export const TINY_MCE_API = 'm3pcelodpggvb0k2egnaqw2cc4j5zgt0dgwyb53jp70m7y6f'

export const adminKey = "admin/";

// API endpoints
export const ENDPOINTS = {
  login: "login",
  logout: "user/logout",
  forget_password: "forget-password",
  image_upload: BASE_API_URL + "image_upload",
  get_profile: "/user/profile",
  update_profile: "/user/update-profile",
  set_password: "set-password",
  forget_password_otp_verify: 'forget-password-otp-verify',
  signup: "signup",

  verify: "verify",
  change_password: "/user/change-password",
  category_active:  "category-active",

  faqActive: "faq-active",

  testimonialActive: "testimonial-active",
  countries_active: "countries-active",
  country_detail: "country-detail",
}






