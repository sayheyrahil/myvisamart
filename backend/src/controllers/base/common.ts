import { Request, Response } from "express";
import response from "@helpers/responseMiddleware";
import log4js from "log4js";
const logger = log4js.getLogger();
import CategoryModel from "@models/category-model";
import FaqModel from "@models/faq-model";

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

export default {
  getActiveCategory,
  getActiveFaq,
};
