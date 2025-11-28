import { Router } from "express";
import baseController from "@controllers/base/auth";
import { auth } from "@helpers/Auth";
import { decryptBody, encryptJsonResponse } from "@middleware/crypto-middleware"; // <-- Add this

const userRouter = Router();

// Apply decryption and encryption middleware to all routes in this router
userRouter.use(decryptBody);
userRouter.use(encryptJsonResponse);

userRouter.use(auth);


userRouter.post(`/update-profile`,  baseController.updateProfile);
userRouter.post(`/profile`,  baseController.getProfile);
userRouter.post(`/change-password`,  baseController.changePassword);
userRouter.post(`/logout`,  baseController.logout);


// Export default
export default userRouter;
