import { NextFunction, Request, Response } from "express";
import validator from "../validate_";
import responseSend from '@helpers/responseMiddleware';
import { Op } from "sequelize";
import TestimonialModel from "@models/testimonials-model";

const store = async (req: Request, res: Response, next: NextFunction) => {
  let id: any = 0;
  if (req.body.id) id = req.body.id;
  const validationRule = {
    "name": "required|string",
    "description": "required|string",
    "image": "required|string",
    "designation": "required|string",
    "company": "required|string",
    "company_logo": "required|string",
    "rating": "required|integer", 
  };
  validator.validatorUtilWithCallback(validationRule, {}, req, res, next);
};

async function nameUniquenessMiddleware(req: Request, res: Response, next: NextFunction) {
  const { name, id } = req.body;
  try {
    const condition: any = { name };
    if (id) condition.id = { [Op.ne]: id };
    const existing = await TestimonialModel.findOne({ where: condition });
    if (existing) return responseSend.sendValidationError(res, { error: "Name already exists." });
    next();
  } catch {
    return responseSend.sendValidationError(res, { error: "An error occurred while checking name uniqueness." });
  }
}

export default { store, nameUniquenessMiddleware };
