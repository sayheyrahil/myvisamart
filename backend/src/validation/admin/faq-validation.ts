import { NextFunction, Request, Response } from "express";
import validator from "../validate_";
import responseSend from '@helpers/responseMiddleware';
import { Op } from "sequelize";
import FaqModel from "@models/faq-model";

const store = async (req: Request, res: Response, next: NextFunction) => {
  let id: any = 0;
  if (req.body.id) id = req.body.id;
  const validationRule = {
    "question": "required|string",
    "answer": "required|string",
    "type": "required|string",
  };
  validator.validatorUtilWithCallback(validationRule, {}, req, res, next);
};

 

export default { store };
