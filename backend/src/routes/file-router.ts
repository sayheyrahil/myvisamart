import { Router } from "express";
import commonService from "@controllers/admin/base/baseCommon";
import multer from "multer";
 

import path from "path";
const fs = require("fs");

// Constants
const fileRouter = Router();
fileRouter.get("/juhi", (req, res) => {
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

// Use 'files' as the field name in your multipart/form-data requests
const uploadaa = multer({ storage: storage });
const uploadFilesMiddleware = uploadaa.single("files");
//  End here for local storage



fileRouter.post(
    "/image_upload",
    uploadFilesMiddleware,
    commonService.uploadImage
);
// fileRouter.post(
//     "/upload-media",
//     uploadFilesMiddleware,
//     commonService.uploadMedia
// );
  

// Export default
export default fileRouter;
