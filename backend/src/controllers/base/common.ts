import { Request, Response } from "express";
import response from "@helpers/responseMiddleware";
import log4js from "log4js";
const logger = log4js.getLogger();
import CategoryModel from "@models/category-model";
import FaqModel from "@models/faq-model";
import CountryModel from "@models/countries-model";

const getActiveCategory = async (req: Request, res: Response) => {
  try {
    const u: any = await CategoryModel.findAll({
      where: {
        is_active: true,
      },
    });
    const sendResponse: any = {
      data: u,
      message: "get successfully",
    };
    return response.sendSuccess(req, res, sendResponse);
  } catch (err: any) {
    const sendResponse: any = {
      message: err.message,
    };
    logger.info("get category error:", err);
    logger.info(err);
    return response.sendError(res, sendResponse);
  }
};

const getActiveFaq = async (req: Request, res: Response) => {
  try {
    const { type } = req.body;
    const { Op } = require("sequelize");
    let where: any = { is_active: true };

    if (type) {
      let typeArray: string[] = [];
      if (Array.isArray(type)) {
        typeArray = type;
      } else if (typeof type === "string") {
        typeArray = type.split(",").map((t: string) => t.trim());
      }
      if (typeArray.length > 0) {
        where[Op.or] = typeArray.map((t) => ({
          type: { [Op.like]: `%${t}%` },
        }));
      }
    }

    const u: any = await FaqModel.findAll({ where });
    const sendResponse: any = {
      data: u,
      message: "get successfully",
    };
    return response.sendSuccess(req, res, sendResponse);
  } catch (err: any) {
    const sendResponse: any = {
      message: err.message,
    };
    logger.info("get category error:", err);
    logger.info(err);
    return response.sendError(res, sendResponse);
  }
};

// Get all active countries with full details
const getActiveCountries = async (req: Request, res: Response) => {
  try {
    const { is_popular, is_top_destination, continent } = req.body;
    const where: any = { is_active: true };

    if (is_popular !== undefined) where.is_popular = is_popular;
    if (is_top_destination !== undefined)
      where.is_top_destination = is_top_destination;
    if (continent) where.continent = continent;

    const countries: any = await CountryModel.findAll({
      where,
      attributes: ["name", "id", "image", "rating", "subtitle", "slug",'visa_process_time'], // Only fetch the name field
    });
    const sendResponse: any = {
      data: countries,
      message: "get successfully",
    };
    return response.sendSuccess(req, res, sendResponse);
  } catch (err: any) {
    const sendResponse: any = {
      message: err.message,
    };
    logger.info("get countries error:", err);
    logger.info(err);
    return response.sendError(res, sendResponse);
  }
};

// Get only names of active countries
const getActiveCountryNames = async (req: Request, res: Response) => {
  try {
    const countries: any = await CountryModel.findAll({
      where: {
        is_active: true,
      },
      attributes: ["name", "id"], // Only fetch the name field
    });
    const sendResponse: any = {
      data: countries,
      message: "get successfully",
    };
    return response.sendSuccess(req, res, sendResponse);
  } catch (err: any) {
    const sendResponse: any = {
      message: err.message,
    };
    logger.info("get country names error:", err);
    logger.info(err);
    return response.sendError(res, sendResponse);
  }
};
const getCountryDetail = async (req: Request, res: Response) => {
  try {
    const { slug } = req.body;
    const where: any = {
      is_active: true,
    };
    if (slug !== undefined) {
      where.slug = slug;
    }
    const countries: any = await CountryModel.findOne({
      where,
      attributes: [
        "id",
        "name",
        "image",
        "icon",
        "video",
        "description",
        "dail_code",
        "detail",
        "visa_process_time",
        "is_active",
        "is_deleted",
        "createdAt",
        "updatedAt",
        "slug",
        "is_top_destination",
        "is_popular",
        "countries",
        "subtitle",
        "rating",
        "continent",
        "required_documents",
        "visa_information",
        "transit_timeline",
        "visa_fee_now",
        "service_fee_now",
        "visa_fee_later",
        "service_fee_later",
        "documents_required_process",
        "partners_we_work_with",
        "rejection_reasons",
        "chances_of_approval_for_this",
        "chances_of_approval_for_other",
        "how_we_reviewed_this_page_sources",
        "how_we_reviewed_this_page_history",
        "get_a_guaranteed_visa_on",
        "check_appointment_availability",
        "statistics_on_visa_processing_time",
        "statistics_on_visa_approval_rating",
        "visa_approval_comparison",
        "what_you_get",
        "why"
      ],
      raw: true, // ensure plain object
    });

    let relatedCountries: any[] = [];
    if (countries && countries.countries) {
      let ids: string[] = [];
      if (Array.isArray(countries.countries)) {
        ids = countries.countries.map((id: any) => String(id).trim()).filter((id: string) => id.length > 0);
      } else {
        ids = String(countries.countries)
          .split(",")
          .map((id: string) => id.trim())
          .filter((id: string) => id.length > 0);
      }

      if (ids.length > 0) {
        relatedCountries = await CountryModel.findAll({
          where: {
            id: ids,
            is_active: true,
          },
          attributes: ["id", "name", "image", "slug"],
          raw: true,
        });
      }
    }

     countries.related_countries = relatedCountries;

     const sendResponse: any = {
      data: countries,
      message: "get successfully",
    };
    return response.sendSuccess(req, res, sendResponse);
  } catch (err: any) {
    const sendResponse: any = {
      message: err.message,
    };
    logger.info("get country names error:", err);
    logger.info(err);
    return response.sendError(res, sendResponse);
  }
};

export default {
  getActiveCategory,
  getActiveFaq,
  getActiveCountries,
  getActiveCountryNames,
  getCountryDetail,
};
