import { Request, Response } from "express";
import response from "@helpers/responseMiddleware";
import log4js from "log4js";
const logger = log4js.getLogger();
import { Op } from "sequelize";
import { sequelize } from "@models/init";
import BlogModel from "@models/blog-model";
import commonFunction from "@helpers/commonFunction";



type BlogData = {
    id?: number;
    title: string;
    date: Date;
    shortDescription: string;
    description: string;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
    is_active?: boolean;
    is_deleted?: boolean;
};


const titleName = "Blog";
const allFiled = [
    "id",
    "title",
    "date",
    "shortDescription",
    "description",
    "image",
    "createdAt",
    "updatedAt",
    "is_active",
    "is_deleted"
];
const project: any = {};

const getAllFiled = async () => {
    await allFiled.map(function async(item: any) {
        project[item] = 1;
    });
};

const get = async (req: Request, res: Response) => {
    try {
        const { search, per_page, page, sort_field, sort_direction, ...filters } = req.query;
        const pageFind = page ? Number(page) - 1 : 0;
        const perPage = per_page == undefined ? 10 : Number(per_page);

        // Build where clause for filters
        let where: any = {};

        // Add field-based filters (exact match)
        allFiled.forEach((field) => {
            if (filters[field] !== undefined && filters[field] !== "") {
                where[field] = filters[field];
            }
        });

        // Add search across all fields (LIKE)
        if (search) {
            const searchFields = allFiled.map((field) => ({
                [field]: {
                    [Op.like]: `%${search}%`,
                },
            }));
            where = {
                ...where,
                [Op.or]: searchFields,
            };
        }

        const order = sort_field
            ? [[sort_field as string, sort_direction === "asc" ? "ASC" : "DESC"]]
            : [["createdAt", "DESC"]];

        let queryOptions: any = {
            where,
            order,
            limit: perPage,
            offset: perPage * pageFind,
        };

        const [items, totalCount] = await Promise.all([
            BlogModel.findAll(queryOptions),
            BlogModel.count({ where }),
        ]);

        const totalPages = Math.ceil(totalCount / perPage);

        const sendResponse = {
            message: `${titleName} data successfully retrieved`,
            data: {
                desc: items,
                total: totalCount,
                limit: perPage,
                page: pageFind + 1,
                pages: totalPages,
            },
        };

        return response.sendSuccess(req, res, sendResponse);
    } catch (err: any) {
        const sendResponse = {
            message: err.message,
        };
        logger.info(`${titleName} data successfully retrieved`);
        logger.info(err);
        return response.sendError(res, sendResponse);
    }
};

const destroy = async (req: Request, res: Response) => {
    try {
        const id: string = req.query.id as string;
        const removeImgModel = await BlogModel.findByPk(id);

        const numDeleted = await BlogModel.destroy({
            // @ts-ignore
            where: {
                id: id,
            },
        });
        if (numDeleted > 0) {
            if (removeImgModel && removeImgModel.image) {
                await commonFunction.removeImage(removeImgModel.image);
            }
            const responseData = {
                message: `${titleName} record has been deleted`,
                data: {},
            };
            return response.sendSuccess(req, res, responseData);
        } else {
            const sendResponse = {
                message: `${titleName} record not found or already deleted`,
            };
            return response.sendError(res, sendResponse);
        }
    } catch (err: any) {
        const sendResponse = {
            message: err.message,
        };
        logger.info(`${titleName} record has been deleted`);
        logger.info(err);
        return response.sendError(res, sendResponse);
    }
};

const getData = async (id: any) => {
    try {
        const itemData = await BlogModel.findByPk(id, {
            attributes: project,
        });

        return itemData ? itemData.toJSON() : {};
    } catch (err: any) {
        // Handle any errors here
        console.error(`Error while fetching ${titleName} data:`, err);
        return {};
    }
};

const edit = async (req: Request, res: Response) => {
    try {
        const id = req.query.id;

        // Retrieve data by primary key using Sequelize
        const data = await getData(id);

        if (data) {
            const responseData = {
                message: `${titleName} edit data get successfully`,
                data,
            };
            return response.sendSuccess(req, res, responseData);
        } else {
            const sendResponse = {
                message: `${titleName} data not found`,
            };
            return response.sendError(res, sendResponse);
        }
    } catch (err: any) {
        const sendResponse = {
            message: err.message,
        };
        logger.info(`${titleName} edit data get successfully`);
        logger.info(err);
        return response.sendError(res, sendResponse);
    }
};
const changeStatus = async (req: Request, res: Response) => {
    try {
        const id = req.body.id;
        const is_active = req.body.is_active;
        const itemData = await BlogModel.findByPk(id);
        if (itemData) {
            itemData.is_active = is_active;
            await itemData.save();
            const message = `${titleName} status ${is_active === true ? "Approved" : "Rejected"
                } successfully`;
            const responseData = {
                message,
                data: true,
            };
            return response.sendSuccess(req, res, responseData);
        } else {
            const sendResponse = {
                message: `${titleName} data not found`,
            };
            return response.sendError(res, sendResponse);
        }
    } catch (err: any) {
        const sendResponse = {
            message: err.message,
        };
        logger.info(`${titleName} data not found`);
        logger.info(err);
        return response.sendError(res, sendResponse);
    }
};


const store = async (req: Request, res: Response) => {
    const transaction = await sequelize.transaction();
    try {
        const bodyData: BlogData = {
            title: req.body.title,
            date: new Date(req.body.date),
            shortDescription: req.body.shortDescription,
            description: req.body.description,
            image: req.body.image,
            is_active: req.body.is_active,
            is_deleted: req.body.is_deleted,
            createdAt: req.body.createdAt ? new Date(req.body.createdAt) : undefined,
            updatedAt: req.body.updatedAt ? new Date(req.body.updatedAt) : undefined,
        };
        if (req.body.id && !isNaN(Number(req.body.id))) {
            bodyData.id = Number(req.body.id);
        }

        const [itemData, created] = await BlogModel.upsert(bodyData, {
            transaction: transaction,
        });

        if (!itemData) {
            throw new Error(`Failed to create a new ${titleName}`);
        }
        const message = `${titleName} store successfully`;
        const responseData = {
            message,
            data: await getData(itemData.id), // Use the Sequelize primary key, which is "id"
        };
        await transaction.commit();
        return response.sendSuccess(req, res, responseData);
    } catch (err: any) {

        console.log(err)
        await transaction.rollback();
        const sendResponse = {
            message: err.message,
        };
        logger.info(`${titleName} store successfully`);
        logger.info(err);
        return response.sendError(res, sendResponse);
    }
};

export default {
    get,
    destroy,
    edit,
    changeStatus,
    store,
};
