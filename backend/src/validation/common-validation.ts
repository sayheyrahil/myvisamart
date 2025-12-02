import { NextFunction, Request, Response } from "express"
import validator from "./validate_";

const idRequiredQuery = async (req: Request, res: Response, next: NextFunction) => {
    const ValidationRule = {
        "id": "required|string",
    }
    validator.validatorUtilWithCallbackQuery(ValidationRule, {}, req, res, next);
}
const idRequired = async (req: Request, res: Response, next: NextFunction) => {
    const ValidationRule = {
        "id": "required",
    }
    validator.validatorUtilWithCallback(ValidationRule, {}, req, res, next);
}

const idRequiredParams = (req: Request, res: Response, next: NextFunction) => {
    const ValidationRule = {
        "id": "required|string",
    }
    validator.validatorUtilWithCallback(ValidationRule, {}, req, res, next);
}
 
const get = (req: Request, res: Response, next: NextFunction) => {
    const ValidationRule = {
        "page": "sometimes|integer",
        "per_page": "sometimes|integer",
        "sort_field": "sometimes|string",
        "sort_direction": "sometimes|string|in:asc,desc",
        "search": "sometimes|string",
        "is_active": "sometimes|boolean", 
    }
    validator.validatorUtilWithCallbackQuery(ValidationRule, {}, req, res, next);
}




export default {
    idRequired,
    idRequiredQuery,
    idRequiredParams,
    get
}