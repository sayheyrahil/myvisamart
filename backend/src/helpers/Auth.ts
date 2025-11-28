import { Request, Response, NextFunction } from "express";
// import jwtUtil from "@helpers/jwt";
import response from "@helpers/responseMiddleware";
import TokenModel from "@models/token-model";
import UserModel from "@models/user-model";
import jwtUtil from '@helpers/jwt';

// Constants
/**
 * Middleware to verify if UserModel is an Customer.
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
export async function auth(req: Request, res: Response, next: NextFunction) {
    try {
        // Get json-web-token
        const jwtToken: any = req.headers["j-authorization"];

        if (!jwtToken) {
            const sendResponse: any = {
                error: "unauthorized user token nthi",
            };
            return response.sendAuthError(res, sendResponse);
        } else {
            // Fix: handle missing/invalid Bearer prefix and empty split
            let token: string | undefined;
            if (jwtToken.startsWith("Bearer ")) {
                token = jwtToken.split(' ')[1];
            } else {
                token = jwtToken;
            }
            if (!token) {
                return response.sendAuthError(res, { error: "unauthorized: token missing" });
            }
            let clientData: any;
            try {
                clientData = await jwtUtil.decode(token);
            } catch (jwtErr) {
                return response.sendAuthError(res, { error: "unauthorized: invalid token" });
            }
            if (clientData) {
                let gettoken: any = await TokenModel.findOne({
                    where: {
                        user_id: clientData.user_id,
                        type: 'user'
                    }
                });
                const UserModelData: any = await UserModel.findOne({
                    where: {
                        id: clientData.user_id
                    },
                    attributes: ['id', 'name', 'email']
                });
                // @ts-ignore
                req.user = UserModelData;
                if (gettoken) {
                    next();
                } else {
                    const sendResponse: any = {
                        error: "unauthorized Token",
                    };
                    return response.sendAuthError(res, sendResponse);
                }
            } else {
                const sendResponse: any = {
                    error: "unauthorized clientData",
                };
                return response.sendAuthError(res, sendResponse);
            }
        }
    } catch (err) {
        const sendResponse: any = {
            error: "unauthorized wrr",
        };
        console.log("Auth Middleware Error:", err);
        return response.sendAuthError(res, sendResponse);
    }
}
