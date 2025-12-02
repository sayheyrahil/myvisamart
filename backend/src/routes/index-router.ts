import { Router } from "express";
import adminController from "@controllers/admin/base/auth";
import baseController from "@controllers/base/auth";
import userCommonService from "@controllers/user/base";
import { decryptBody, encryptJsonResponse } from "@middleware/crypto-middleware"; // <-- Add this import
 
 

// Constants
const indexRouter = Router();
 
 
indexRouter.post(`/admin_login`, adminController.login); 
indexRouter.post(`/admin_forget_password`, adminController.forgetPassword);
indexRouter.post(`/contact`, userCommonService.contactUsStore);


// --- Grouped encrypted routes ---
const encryptedRouter = Router();
 

encryptedRouter.use(decryptBody, encryptJsonResponse);

encryptedRouter.post(`/login`, baseController.login);
encryptedRouter.post(`/forget-password`, baseController.forgetPassword);
encryptedRouter.post(`/signup`, baseController.signUp);
encryptedRouter.post(`/verify`, baseController.verify);
encryptedRouter.post(`/forget-password-otp-verify`, baseController.forgetPasswordOtpVerify);
encryptedRouter.post(`/set-password`, baseController.setPassword);

// Mount the encrypted router
indexRouter.use("/", encryptedRouter);

// Export default
export default indexRouter;
