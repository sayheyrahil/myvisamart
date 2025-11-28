import { Router } from "express";
import commonValidation from "@validation/common-validation";
import blogController from "@controllers/admin/base/blog"
import blogValidation from "@validation/admin/blog-validation";
import socialMediaController from "@controllers/admin/base/socialMedia"
import cmsPagesController from '@controllers/admin/base/cmsPages';
import contactInfoController from '@controllers/admin/base/contactInfo';
import teamController from "@controllers/admin/team";
import happyClientController from "@controllers/admin/happyClient";
import ourServiceController from "@controllers/admin/ourService";
import portfollioController from "@controllers/admin/portfollio";
import productController from "@controllers/admin/product";
import galleryController from "@controllers/admin/gallery";
import teamValidation from "@validation/admin/team-validation";
import happyClientValidation from "@validation/admin/happyClient-validation";
import ourServiceValidation from "@validation/admin/ourService-validation";
import portfollioValidation from "@validation/admin/portfollio-validation";
import productValidation from "@validation/admin/product-validation";
import galleryValidation from "@validation/admin/gallery-validation";



const adminRouter = Router();


adminRouter.get(`/blog/get`, commonValidation.get ,blogController.get);
adminRouter.post(`/blog/store`, blogValidation.store, blogValidation.nameUniquenessMiddleware, blogController.store);
adminRouter.get(`/blog/edit_get`,  commonValidation.idRequiredQuery, blogController.edit);
adminRouter.delete(`/blog/delete`, commonValidation.idRequiredQuery,blogController.destroy);
adminRouter.post(`/blog/change_status`, commonValidation.idRequired, blogController.changeStatus);

adminRouter.get(`/cms_pages/get`, cmsPagesController.get);
adminRouter.post(`/cms_pages/store`, cmsPagesController.store);
adminRouter.get(`/cms_pages/edit_get`, cmsPagesController.edit);
adminRouter.delete(`/cms_pages/delete`,commonValidation.idRequiredQuery,  cmsPagesController.destroy);
adminRouter.post(`/cms_pages/change_status`,commonValidation.idRequired,  cmsPagesController.changeStatus);

adminRouter.get(`/social_media/get`, socialMediaController.get);
adminRouter.post(`/social_media/store`, socialMediaController.store);
adminRouter.get(`/social_media/edit_get`, socialMediaController.edit);
adminRouter.delete(`/social_media/delete`,commonValidation.idRequiredQuery,  socialMediaController.destroy);
adminRouter.post(`/social_media/change_status`,commonValidation.idRequired,  socialMediaController.changeStatus);

adminRouter.get(`/contact_info/get`, contactInfoController.get);
adminRouter.post(`/contact_info/store`, contactInfoController.store);
adminRouter.get(`/contact_info/edit_get`, contactInfoController.edit);
adminRouter.delete(`/contact_info/delete`,commonValidation.idRequiredQuery,  contactInfoController.destroy);
adminRouter.post(`/contact_info/change_status`,commonValidation.idRequired,  contactInfoController.changeStatus);

// Team routes
adminRouter.get(`/team/get`, teamController.get);
adminRouter.post(`/team/store`, teamValidation.store, teamValidation.nameUniquenessMiddleware, teamController.store);
adminRouter.get(`/team/edit_get`, commonValidation.idRequiredQuery, teamController.edit);
adminRouter.delete(`/team/delete`, commonValidation.idRequiredQuery, teamController.destroy);
adminRouter.post(`/team/change_status`, commonValidation.idRequired, teamController.changeStatus);

// HappyClient routes
adminRouter.get(`/happy_client/get`, happyClientController.get);
adminRouter.post(`/happy_client/store`, happyClientValidation.store, happyClientValidation.nameUniquenessMiddleware, happyClientController.store);
adminRouter.get(`/happy_client/edit_get`, commonValidation.idRequiredQuery, happyClientController.edit);
adminRouter.delete(`/happy_client/delete`, commonValidation.idRequiredQuery, happyClientController.destroy);
adminRouter.post(`/happy_client/change_status`, commonValidation.idRequired, happyClientController.changeStatus);

// OurService routes
adminRouter.get(`/our_service/get`, ourServiceController.get);
adminRouter.post(`/our_service/store`, ourServiceValidation.store, ourServiceValidation.nameUniquenessMiddleware, ourServiceController.store);
adminRouter.get(`/our_service/edit_get`, commonValidation.idRequiredQuery, ourServiceController.edit);
adminRouter.delete(`/our_service/delete`, commonValidation.idRequiredQuery, ourServiceController.destroy);
adminRouter.post(`/our_service/change_status`, commonValidation.idRequired, ourServiceController.changeStatus);

// Portfollio routes
adminRouter.get(`/portfolio/get`, portfollioController.get);
adminRouter.post(`/portfolio/store`, portfollioValidation.store, portfollioValidation.nameUniquenessMiddleware, portfollioController.store);
adminRouter.get(`/portfolio/edit_get`, commonValidation.idRequiredQuery, portfollioController.edit);
adminRouter.delete(`/portfolio/delete`, commonValidation.idRequiredQuery, portfollioController.destroy);
adminRouter.post(`/portfolio/change_status`, commonValidation.idRequired, portfollioController.changeStatus);

// Product routes
adminRouter.get(`/product/get`, productController.get);
adminRouter.post(`/product/store`, productValidation.store, productValidation.nameUniquenessMiddleware, productController.store);
adminRouter.get(`/product/edit_get`, commonValidation.idRequiredQuery, productController.edit);
adminRouter.delete(`/product/delete`, commonValidation.idRequiredQuery, productController.destroy);
adminRouter.post(`/product/change_status`, commonValidation.idRequired, productController.changeStatus);

// Gallery routes
adminRouter.get(`/gallery/get`, galleryController.get);
adminRouter.post(`/gallery/store`, galleryValidation.store, galleryValidation.nameUniquenessMiddleware, galleryController.store);
adminRouter.get(`/gallery/edit_get`, commonValidation.idRequiredQuery, galleryController.edit);
adminRouter.delete(`/gallery/delete`, commonValidation.idRequiredQuery, galleryController.destroy);
adminRouter.post(`/gallery/change_status`, commonValidation.idRequired, galleryController.changeStatus);

 




// Export default
export default adminRouter;
