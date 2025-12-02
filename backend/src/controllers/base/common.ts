import { Request, Response } from 'express';
import response from '@helpers/responseMiddleware';
import log4js from "log4js";
const logger = log4js.getLogger();
import CategoryModel from '@models/category-model';

const getActiveCategory = (async (req: Request, res: Response) => {
    try {
         const u: any = await CategoryModel.findAll({
            where: {
                is_active: true,
            },
        });
        const sendResponse: any = {
            data: u,
            message: 'get successfully',
        }
        return response.sendSuccess(req, res, sendResponse);
    } catch (err: any) {
        const sendResponse: any = {
            message: err.message,
        }
        logger.info("get category error:", err);
        logger.info(err);
        return response.sendError(res, sendResponse);
    }
})

export default {
    getActiveCategory,
}