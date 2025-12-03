import { Router } from "express";
import commonValidation from "@validation/common-validation";
import categoryController from "@controllers/admin/category"
import categoryValidation from "@validation/admin/category-validation";
import destinationController from "@controllers/admin/destination"
import destinationValidation from "@validation/admin/destination-validation";

import countriesController from "@controllers/admin/countries";
import countriesValidation from "@validation/admin/countries-validation";

import { decryptBody, encryptJsonResponse } from "@middleware/crypto-middleware"; // <-- Add this


const adminRouter = Router();
adminRouter.use(decryptBody);
adminRouter.use(encryptJsonResponse);

 
// Gallery routes
adminRouter.post(`/category/get`, categoryController.get);
adminRouter.post(`/category/store`, categoryValidation.store, categoryValidation.nameUniquenessMiddleware, categoryController.store);
adminRouter.post(`/category/edit_get`, commonValidation.idRequired, categoryController.edit);
adminRouter.post(`/category/delete`, commonValidation.idRequired, categoryController.destroy);
adminRouter.post(`/category/change_status`, commonValidation.idRequired, categoryController.changeStatus);

 
// Destination routes
adminRouter.post(`/destination/get`, destinationController.get);
adminRouter.post(`/destination/store`, destinationValidation.store, destinationValidation.nameUniquenessMiddleware, destinationController.store);
adminRouter.post(`/destination/edit_get`, commonValidation.idRequired, destinationController.edit);
adminRouter.post(`/destination/delete`, commonValidation.idRequired, destinationController.destroy);
adminRouter.post(`/destination/change_status`, commonValidation.idRequired, destinationController.changeStatus);

 
// Destination routes
adminRouter.post(`/countries/get`, countriesController.get);
adminRouter.post(`/countries/store`, countriesValidation.store, countriesValidation.nameUniquenessMiddleware, countriesController.store);
adminRouter.post(`/countries/edit_get`, commonValidation.idRequired, countriesController.edit);
adminRouter.post(`/countries/delete`, commonValidation.idRequired, countriesController.destroy);
adminRouter.post(`/countries/change_status`, commonValidation.idRequired, countriesController.changeStatus);

 





// Export default
export default adminRouter;
