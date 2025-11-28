import { NextFunction, Request, Response } from "express";
import validator from "../validate_";
import responseSend from '@helpers/responseMiddleware';
import { Op } from "sequelize";
import GalleryModel from "@models/gallery-model";

const store = async (req: Request, res: Response, next: NextFunction) => {
  let id: any = 0;
  if (req.body.id) id = req.body.id;
  const validationRule = {
    "title": "required|string",
    "images": "required|array",
    "description": "required|string",
    "is_active": "optional|boolean",
  };
  validator.validatorUtilWithCallback(validationRule, {}, req, res, next);
};

async function nameUniquenessMiddleware(req: Request, res: Response, next: NextFunction) {
  const { title, id } = req.body;
  try {
    const condition: any = { title };
    if (id) condition.id = { [Op.ne]: id };
    const existing = await GalleryModel.findOne({ where: condition });
    if (existing) return responseSend.sendValidationError(res, { error: "Title already exists." });
    next();
  } catch {
    return responseSend.sendValidationError(res, { error: "An error occurred while checking title uniqueness." });
  }
}

export default { store, nameUniquenessMiddleware };
