import { Router } from "express";
import commonValidation from "@validation/common-validation";
import categoryController from "@controllers/admin/category"
import categoryValidation from "@validation/admin/category-validation";
import destinationController from "@controllers/admin/destination"
import destinationValidation from "@validation/admin/destination-validation";

import countriesController from "@controllers/admin/countries";
import countriesValidation from "@validation/admin/countries-validation";

import testimonialController from "@controllers/admin/testimonial";
import testimonialValidation from "@validation/admin/testimonial-validation";

import faqController from "@controllers/admin/faq";
import faqValidation from "@validation/admin/faq-validation";

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
adminRouter.post(`/countries/store`, countriesValidation.store,   countriesController.store);
adminRouter.post(`/countries/edit_get`, commonValidation.idRequired, countriesController.edit);
adminRouter.post(`/countries/delete`, commonValidation.idRequired, countriesController.destroy);
adminRouter.post(`/countries/change_status`, commonValidation.idRequired, countriesController.changeStatus);

 

// FAQ routes
adminRouter.post(`/faq/get`, faqController.get);
adminRouter.post(`/faq/store`, faqValidation.store, faqController.store);
adminRouter.post(`/faq/edit_get`, commonValidation.idRequired, faqController.edit);
adminRouter.post(`/faq/delete`, commonValidation.idRequired, faqController.destroy);
adminRouter.post(`/faq/change_status`, commonValidation.idRequired, faqController.changeStatus);


// FAQ routes
adminRouter.post(`/testimonial/get`, testimonialController.get);
adminRouter.post(`/testimonial/store`, testimonialValidation.store, testimonialController.store);
adminRouter.post(`/testimonial/edit_get`, commonValidation.idRequired, testimonialController.edit);
adminRouter.post(`/testimonial/delete`, commonValidation.idRequired, testimonialController.destroy);
adminRouter.post(`/testimonial/change_status`, commonValidation.idRequired, testimonialController.changeStatus);




// Export default
export default adminRouter;
