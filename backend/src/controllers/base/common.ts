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
      attributes: ["name", "id", "image", "rating", "subtitle", "slug"], // Only fetch the name field
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
        "description",
        "dail_code",
        "detail",
        "visa_process_time",
        "amount",
        "pay_later_amount",
        "is_top_destination",
        "is_popular",
        "countries",
        "subtitle",
        "rating",
        "continent",
        "slug",
        "visa_information",
        "transit_timeline",
        "required_documents",
        "visa_fee_now",
        "service_fee_now",
        "visa_fee_later",
        "service_fee_later",
        'documents_required_process',
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

    // Attach related_countries to the response object
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
