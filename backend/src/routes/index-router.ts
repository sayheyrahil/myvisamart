import { Router } from "express";
import adminController from "@controllers/admin/base/auth";
import baseController from "@controllers/base/auth";
import userCommonService from "@controllers/user/base";
import visaService from "@controllers/user/visa";
import commonService from "@controllers/base/common";
import { decryptBody, encryptJsonResponse } from "@middleware/crypto-middleware"; // <-- Add this import



// Constants
const indexRouter = Router();
indexRouter.use(decryptBody, encryptJsonResponse);


indexRouter.post(`/admin_login`, adminController.login);
indexRouter.post(`/admin_forget_password`, adminController.forgetPassword);
indexRouter.post(`/contact`, userCommonService.contactUsStore);



// get here all router
indexRouter.post(`/category-active`, commonService.getActiveCategory);
indexRouter.post(`/faq-active`, commonService.getActiveFaq);
indexRouter.post(`/testimonial-active`, commonService.getActiveTestimonial);

indexRouter.post(`/countries-active`, commonService.getActiveCountries); // <-- Add this line
indexRouter.post(`/country-names-active`, commonService.getActiveCountryNames); // <-- Add this line
indexRouter.post(`/country-detail`, commonService.getCountryDetail); // <-- Add this line

 
// --- Grouped encrypted routes ---
const encryptedRouter = Router();


encryptedRouter.use(decryptBody, encryptJsonResponse);

encryptedRouter.post(`/login`, baseController.login);
encryptedRouter.post(`/forget-password`, baseController.forgetPassword);
encryptedRouter.post(`/signup`, baseController.signUp);
encryptedRouter.post(`/verify`, baseController.verify);
encryptedRouter.post(`/forget-password-otp-verify`, baseController.forgetPasswordOtpVerify);
encryptedRouter.post(`/set-password`, baseController.setPassword);



encryptedRouter.post(`/visa-process`, visaService.visaProcess);







// Mount the encrypted router
indexRouter.use("/", encryptedRouter);

// Export default
export default indexRouter;
