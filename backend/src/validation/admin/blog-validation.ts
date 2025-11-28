import { NextFunction, Request, Response } from "express";
import validator from "../validate_";
import responseSend from '@helpers/responseMiddleware';
import { Op } from "sequelize";
import BlogModel from "@models/blog-model";

const store = async (req: Request, res: Response, next: NextFunction) => {
  let id: any = 0;
  if (req.body.id) {
    id = req.body.id
  }
  const validationRule = {
    "title": "required|string",
    "date": "required|date",
    "shortDescription": "required|string",
    "description": "required|string",
    "image": "required|string",
    // "id": `optional|integer|exists:blog,id,${id}`, // Check if ID exists only if provided
    "is_active": "optional|boolean",
  };
  validator.validatorUtilWithCallback(validationRule, {}, req, res, next);
};


async function nameUniquenessMiddleware(req: Request, res: Response, next: NextFunction) {
  const { title, id } = req.body;

  try {
    const condition: any = {
      title,
    };

    // If editing, exclude the current item ID
    if (id) {
      condition.id = { [Op.ne]: id };  // Exclude current item when editing
    }

    const existingTitle = await BlogModel.findOne({
      where: condition,
    });

    if (existingTitle) {
      return responseSend.sendValidationError(res, { error: "Title already exists." });
    }

    next();
  } catch (error) {
    return responseSend.sendValidationError(res, { error: "An error occurred while checking title uniqueness." });
  }
}


export default {
  store,
  nameUniquenessMiddleware
};