import response from "@helpers/responseMiddleware";
import log4js from "log4js";
const logger = log4js.getLogger();
import fs from "fs";
import util from "util";
import ContactModel from "@models/contact-model";
import Contact from "@models/contact-model";


// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ============================================= Over Here Include Library =============================================
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
  getContact,
  contactUsStore,
};
