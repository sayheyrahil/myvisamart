import { Router } from "express";

import adminController from '@controllers/admin/base/auth';
import { authAdmin } from "@helpers/AdminAuth";
import contactController from '@controllers/admin/base/contact';
 import commonValidation from '@validation/common-validation';

 



const baseAdminRouter = Router();

baseAdminRouter.use(authAdmin);
baseAdminRouter.post(`/change_password`, adminController.changePassword);
baseAdminRouter.post(`/logout`, adminController.logout);
baseAdminRouter.post(`/profile_update`, adminController.updateProfile);
baseAdminRouter.get(`/profile`, adminController.getProfile);

 

baseAdminRouter.get(`/contact/get`, contactController.get);
baseAdminRouter.delete(`/contact/delete`,commonValidation.idRequiredQuery,  contactController.destroy);
 
// Export default
export default baseAdminRouter;
