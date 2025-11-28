import { NextFunction, Request, Response } from "express";
import validator from "../validate_";
  import responseSend from '@helpers/responseMiddleware';
// import UserModel from "@models/user-model";
 
const register = async (req: Request, res: Response, next: NextFunction) => {
	let id: any = 0;
	if (req.body.id) {
		id = req.body.id
	}

	const validationRule = {
		"name": "required|string",
		"email": "required|string|email",
		// "email": "required|string|email|exist:patients,email," + id,

		"profile_pic": "required|string",
		"password": "required|string",
		"sex": "required|string",
		"dob": "required|string",
		"phone": "required|string",
		"address": "required|string",
		"country": "required|string",
		"state": "required|string",
		"city": "required|string",

	};


	validator.validatorUtilWithCallback(validationRule, {}, req, res, next);
};

async function emailUniquenessMiddleware(req: Request, res: Response, next: NextFunction) {
	const email = req.body.email;

	// Query database for the email
	// const existingUser = await UserModel.findOne({
	// 	where: {
	// 		email,
	// 	},
	// });
	// if (existingUser) {
	// 	return responseSend.sendValidationError(res, { error: "Email already exists." })
	// }

	next();
}

const profile = async (req: Request, res: Response, next: NextFunction) => {
	let id: any = 0;
	if (req.body.id) {
		id = req.body.id
	}
	const validationRule = {
		"name": "required|string",
		"email": "required|string|email",
		// "profile_pic": "required|string",
		"sex": "required|string",
		"dob": "required|string",
		"phone": "required|string",
		"address": "required|string",
		"country": "required|string",
		"state": "required|string",
		"city": "required|string"
	};

	validator.validatorUtilWithCallback(validationRule, {}, req, res, next);
};

const login = async (req: Request, res: Response, next: NextFunction) => {
	const validationRule = {
		email: "required|string",
		password: "required|string",
	};
	validator.validatorUtilWithCallback(validationRule, {}, req, res, next);
};

const changePassword = async (req: Request, res: Response, next: NextFunction) => {
	const validationRule = {
		old_password: "required|string",
		password: "required|string|min:6|confirmed",
		password_confirmation: "required|string|min:6",
	};
	validator.validatorUtilWithCallback(validationRule, {}, req, res, next);
};



const emailValidation = async (req: Request, res: Response, next: NextFunction) => {
	const validationRule = {
		"email": "required|string|email",
	}
	validator.validatorUtilWithCallback(validationRule, {}, req, res, next);
}

const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
	const validationRule = {
		password: "required|string|min:6",
	};
	validator.validatorUtilWithCallback(validationRule, {}, req, res, next);
};

const verifyMobileNumber = async (req: Request, res: Response, next: NextFunction) => {
	const validationRule = {
		// mobile_no: "required",
	};
	validator.validatorUtilWithCallback(validationRule, {}, req, res, next);
};

const verifyOtp = async (req: Request, res: Response, next: NextFunction) => {
	const validationRule = {
		otp: "required|string|min:4|max:4",
		token: "required"
	};
	validator.validatorUtilWithCallback(validationRule, {}, req, res, next);
};

export default {
	login,
	register,
	changePassword,
	profile,
	emailValidation,
	resetPassword,
	verifyMobileNumber,
	verifyOtp,
	emailUniquenessMiddleware
};