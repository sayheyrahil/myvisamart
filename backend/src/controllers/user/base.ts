import response from "@helpers/responseMiddleware";
import log4js from "log4js";
const logger = log4js.getLogger();
import fs from "fs";
import util from "util";
import ContactModel from "@models/contact-model";
import Contact from "@models/contact-model";

import CmsPagesModel from "@models/cms-pages-model";

import SocialMediaModel from "@models/social-media-model";
import ContactInfoModel from "@models/contact-info-model";

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ============================================= Over Here Include Library =============================================
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const getContactDetails = async (req: any, res: any) => {
  try {
    // Directly fetch the first (and only) contact info row
    const page = await ContactInfoModel.findOne();

    if (!page) {
      return response.sendError(res, { message: "Contact Info not found" });
    }

    const sendResponse = {
      data: page,
      message: process.env.APP_PROFILE_GET_MESSAGE || "Contact Info retrieved successfully",
    };

    return response.sendSuccess(req, res, sendResponse);

  } catch (err: any) {
    logger.info(process.env.APP_PROFILE_GET_MESSAGE);
    logger.info(err);
    return response.sendError(res, { message: err.message });
  }
};

const getSocialMediaLinks = async (req: any, res: any) => {
  try {
    const links = await SocialMediaModel.findAll({
      where: {
        is_active: true,
        is_deleted: false,
      },
    });

    if (!links || links.length === 0) {
      return response.sendError(res, { message: "No social links found" });
    }

    // Convert array to key-value pair object
    const socialLinks: Record<string, string> = {};
    links.forEach(link => {
      socialLinks[link.platform.toLowerCase()] = link.url;
    });

    const sendResponse = {
      data: socialLinks,
      message: process.env.APP_PROFILE_GET_MESSAGE || "Social media links retrieved successfully",
    };

    return response.sendSuccess(req, res, sendResponse);

  } catch (err: any) {
    logger.info("Error while fetching social media links:", err);
    return response.sendError(res, { message: err.message });
  }
};

const getCmsPage = async (req: any, res: any) => {
  try {
    const { name } = req.query; // Or req.params if using dynamic route

    if (!name) {
      return response.sendError(res, { message: "Page name is required" });
    }

    const page = await CmsPagesModel.findOne({
      where: {
        name,
        is_active: true,
        is_deleted: false,
      },
    });

    if (!page) {
      return response.sendError(res, { message: "CMS Page not found" });
    }

    const sendResponse = {
      data: page,
      message: process.env.APP_PROFILE_GET_MESSAGE || "Page retrieved successfully",
    };

    return response.sendSuccess(req, res, sendResponse);

  } catch (err: any) {
    logger.info(process.env.APP_PROFILE_GET_MESSAGE);
    logger.info(err);
    return response.sendError(res, { message: err.message });
  }
};

const getContact = async (req: any, res: any) => {
  try {
    const sendResponse: any = {
      data: await ContactModel.findAll(),
      message: process.env.APP_PROFILE_GET_MESSAGE,
    };

    return response.sendSuccess(req, res, sendResponse);
  } catch (err: any) {
    const sendResponse: any = {
      message: err.message,
    };
    logger.info(process.env.APP_PROFILE_GET_MESSAGE);
    logger.info(err);
    return response.sendError(res, sendResponse);
  }
};

const contactUsStore = async (req: any, res: any) => {
  try {
    const bodyData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    };

    const [itemData, created] = await Contact.upsert(bodyData);
    if (!itemData) {
      throw new Error(`Failed to create a new m ,klkk`);
    }
    const message = `Your contact information has been updated successfully!`;
    const responseData = {
      message,
      data: true, // Use the Sequelize primary key, which is "id"
    };
    return response.sendSuccess(req, res, responseData);
  } catch (err: any) {
    const sendResponse = {
      message: err.message,
    };
    logger.info(err);
    return response.sendError(res, sendResponse);
  }
};


// Export default
export default {
  getContactDetails,
  getSocialMediaLinks,
  getContact,
  contactUsStore,
  getCmsPage,
};
