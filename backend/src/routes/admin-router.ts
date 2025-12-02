import { Router } from "express";
import commonValidation from "@validation/common-validation";
import categoryController from "@controllers/admin/category"
import categoryValidation from "@validation/admin/category-validation";

import { decryptBody, encryptJsonResponse } from "@middleware/crypto-middleware"; // <-- Add this


const adminRouter = Router();
adminRouter.use(decryptBody);
adminRouter.use(encryptJsonResponse);

 
// Gallery routes
adminRouter.post(`/category/get`, categoryController.get);
adminRouter.post(`/category/store`, categoryValidation.store, categoryValidation.nameUniquenessMiddleware, categoryController.store);
adminRouter.get(`/category/edit_get`, commonValidation.idRequired, categoryController.edit);
adminRouter.delete(`/category/delete`, commonValidation.idRequired, categoryController.destroy);
adminRouter.post(`/category/change_status`, commonValidation.idRequired, categoryController.changeStatus);

 




// Export default
export default adminRouter;
