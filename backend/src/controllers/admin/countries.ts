import { Request, Response } from "express";
import response from "@helpers/responseMiddleware";
import log4js from "log4js";
const logger = log4js.getLogger();
import { Op } from "sequelize";
import { sequelize } from "@models/init";
import CountriesModel from "@models/countries-model"; // <-- Change to your HappyClient model
import commonFunction from "@helpers/commonFunction";

type countriesData = {
    id?: number;
    name: string;
    description: string;
    image: string;
    icon: string;
    dail_code: string;
    detail: string;
    visa_process_time: string;
    amount: number;
    pay_later_amount: number;
    createdAt?: Date;
    updatedAt?: Date;
    is_active?: boolean;
    is_deleted?: boolean;
    visa_fee_now?: number;
    service_fee_now?: number;
    visa_fee_later?: number;
    service_fee_later?: number;
};

const titleName = "countries";
const allFiled = [
    "id",
    "name",
    "description",
    "image",
    "icon",
    "dail_code",
    "detail",
    "visa_process_time",
    "amount",
    "pay_later_amount",
    "createdAt",
    "updatedAt",
    "is_active",
    "is_deleted",
    "visa_fee_now",
    "service_fee_now",
    "visa_fee_later",
    "service_fee_later"
];
// Only these fields will be used for LIKE search
const searchableFields = [
    "name",
    "description",
    "image",
     "icon",
    "dail_code",
    "detail",
    "visa_process_time"
];
const project: any = {};


const get = async (req: Request, res: Response) => {
    try {
        const { search, per_page, page, sort_field, sort_direction, ...filters } = req.body;
        const pageFind = page ? Number(page) - 1 : 0;
        const perPage = per_page == undefined ? 10 : Number(per_page);

        let where: any = {};

        allFiled.forEach((field) => {
            if (filters[field] !== undefined && filters[field] !== "") {
                where[field] = filters[field];
            }
        });

        // Only apply search filter if search is a non-empty string
        if (typeof search === "string" && search.trim() !== "") {
             const searchFields = searchableFields.map((field) => ({
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
            CountriesModel.findAll(queryOptions),
            CountriesModel.count({ where }),
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
        const id: string = req.body.id as string;
        const removeImgModel = await CountriesModel.findByPk(id);

        const numDeleted = await CountriesModel.destroy({
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
        const itemData = await CountriesModel.findByPk(id, {
            attributes: project,
        });

        return itemData ? itemData.toJSON() : {};
    } catch (err: any) {
        console.error(`Error while fetching ${titleName} data:`, err);
        return {};
    }
};

const edit = async (req: Request, res: Response) => {
    try {
        const id = req.body.id;
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
        const itemData = await CountriesModel.findByPk(id);
        if (itemData) {
            itemData.is_active = is_active;
            await itemData.save();
            const message = `${titleName} status ${is_active === 1 ? "Approved" : "Rejected"
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
        // Generate slug from name
        const slug = req.body.name
            ? req.body.name.trim().toLowerCase().replace(/\s+/g, "-")
            : "";

        // Ensure countries is a string
        let countriesValue = req.body.countries ?? "";
        if (Array.isArray(countriesValue)) {
            countriesValue = countriesValue.join(",");
        } else if (typeof countriesValue === "object" && countriesValue !== null) {
            countriesValue = JSON.stringify(countriesValue);
        }

        const bodyData: countriesData & {
            slug?: string;
            is_top_destination?: boolean;
            is_popular?: boolean;
            countries?: string;
            subtitle?: string;
            rating?: number;
            continent?: string;
            required_documents?: any;
            visa_information?: any;
            transit_timeline?: any;
        } = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            icon: req.body.icon,
            dail_code: req.body.dail_code,
            detail: req.body.detail,
            visa_process_time: req.body.visa_process_time,
            amount: req.body.amount,
            pay_later_amount: req.body.pay_later_amount,
            is_active: req.body.is_active,
            is_deleted: req.body.is_deleted,
            createdAt: req.body.createdAt ? new Date(req.body.createdAt) : undefined,
            updatedAt: req.body.updatedAt ? new Date(req.body.updatedAt) : undefined,
            slug: slug,
            is_top_destination: req.body.is_top_destination ?? false,
            is_popular: req.body.is_popular ?? false,
            countries: countriesValue,
            subtitle: req.body.subtitle ?? "",
            rating: req.body.rating ?? 0,
            continent: req.body.continent ?? "",
            required_documents: req.body.required_documents ?? [],
            visa_information: req.body.visa_information ?? [],
            transit_timeline: req.body.transit_timeline ?? [],
            visa_fee_now: req.body.visa_fee_now ?? 0,
            service_fee_now: req.body.service_fee_now ?? 0,
            visa_fee_later: req.body.visa_fee_later ?? 0,
            service_fee_later: req.body.service_fee_later ?? 0,
        };
        if (req.body.id && !isNaN(Number(req.body.id))) {
            bodyData.id = Number(req.body.id);
        }

        const [itemData, created] = await CountriesModel.upsert(bodyData, {
            transaction: transaction,
        });

        if (!itemData) {
            throw new Error(`Failed to create a new ${titleName}`);
        }
        const message = `${titleName} store successfully`;
        const responseData = {
            message,
            data: await getData(itemData.id),
        };
        await transaction.commit();
        return response.sendSuccess(req, res, responseData);
    } catch (err: any) {
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