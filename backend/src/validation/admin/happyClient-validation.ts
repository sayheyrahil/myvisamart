import { NextFunction, Request, Response } from "express";
import validator from "../validate_";
import responseSend from '@helpers/responseMiddleware';
import { Op } from "sequelize";
import HappyClientModel from "@models/happy-client-model";

const store = async (req: Request, res: Response, next: NextFunction) => {
  let id: any = 0;
  if (req.body.id) id = req.body.id;
  const validationRule = {
    "name": "required|string",
    "description": "required|string",
    "designation": "required|string",
    "image": "required|string",
    "star_count": "required|integer",
    "is_active": "optional|boolean",
  };
  validator.validatorUtilWithCallback(validationRule, {}, req, res, next);
};

async function nameUniquenessMiddleware(req: Request, res: Response, next: NextFunction) {
  const { name, id } = req.body;
  try {
    const condition: any = { name };
    if (id) condition.id = { [Op.ne]: id };
    const existing = await HappyClientModel.findOne({ where: condition });
    if (existing) return responseSend.sendValidationError(res, { error: "Name already exists." });
    next();
  } catch {
    return responseSend.sendValidationError(res, { error: "An error occurred while checking name uniqueness." });
  }
}

export default { store, nameUniquenessMiddleware };
