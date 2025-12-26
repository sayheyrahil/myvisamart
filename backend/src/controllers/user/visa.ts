import response from "@helpers/responseMiddleware";
import log4js from "log4js";
const logger = log4js.getLogger();

import ApplicantsModel from "@models/applicants-model";

import VisaApplication from "@models/visa-application-model";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ============================================= Over Here Include Library =============================================
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const generateUniqueCode = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const visaProcess = async (req: any, res: any) => {
  console.log("visaProcess called with body:", req.body);
  try {
    // Prepare VisaApplication data
    const applicationData = {
      user_id: req.body.user_id,
      country_id: req.body.country_id,
      unique_code: generateUniqueCode(),
      selected_sponsor: req.body.selectedSponsor, // Corrected field name
      selected_sponsorts: req.body.selectedSponsor, // If your model still expects this, keep it; otherwise, remove
      noOptions: req.body.noOptions,
      selected: req.body.selected,
      // ...other fields if needed
    };

    // Store or update VisaApplication
    const [itemData, created] = await VisaApplication.upsert(applicationData);

    // Store each applicant in ApplicantsModel
    if (Array.isArray(req.body.noOptions)) {
      for (const applicant of req.body.noOptions) {
        await ApplicantsModel.create({
          first_name: applicant.name,
          last_name: applicant.lastName || "",
          dob: applicant.dob || null,
          extra_data: applicant || {},
          passport_number: applicant.passportNumber || null,
          gender: applicant.gender || null,
          user_id: req.body.user_id,
          visa_unique_code: applicationData.unique_code,
          visa_application_id: itemData.id,
        });
      }
    }

    if (!itemData) {
      throw new Error(`Failed to create or update visa application`);
    }
    const message = `Your visa application information has been saved successfully!`;
    const responseData = {
      message,
      data: true,
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
  visaProcess,
};
