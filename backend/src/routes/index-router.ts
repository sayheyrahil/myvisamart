import { Router } from "express";
import commonService from "@controllers/admin/base/baseCommon";
import multer from "multer";
import adminController from "@controllers/admin/base/auth";
import baseController from "@controllers/base/auth";
import userCommonService from "@controllers/user/base";
import { decryptBody, encryptJsonResponse } from "@middleware/crypto-middleware"; // <-- Add this import
import bodyParser from "body-parser";

import path from "path";
const fs = require("fs");

// Constants
const indexRouter = Router();
indexRouter.get("/juhi", (req, res) => {
    res.send("juhisss");
});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const type = req.query.type || "default";
        const folder = path.join(process.env.DIRNAME!, "uploads", type as string);

        fs.mkdirSync(folder, { recursive: true });
        cb(null, folder);
    },
    filename: function (req, file, cb) {
        const sanitized = file.originalname.replace(/\s/g, "_");
        const timestamp = new Date().toISOString().replace(/:/g, "-");
        cb(null, `${timestamp}-${sanitized}`);
    },
});

// need to cehck here

const uploadaa = multer({ storage: storage });

const uploadFilesMiddleware = uploadaa.single("files");
//  End here for local storage



indexRouter.post(
    "/image_upload",
    uploadFilesMiddleware,
    commonService.uploadImage
);
indexRouter.post(
    "/upload-media",
    uploadFilesMiddleware,
    commonService.uploadMedia
);
 
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
