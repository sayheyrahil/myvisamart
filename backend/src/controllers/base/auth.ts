import { Request, Response } from 'express';
import jwt from '@helpers/jwt';
import bcrypt from 'bcrypt';
import response from '@helpers/responseMiddleware';
import log4js from "log4js";
const logger = log4js.getLogger();
import User from '@models/user-model';
import TokenModel from '@models/token-model';
import OtpModel from "@models/otp-model";
import CommonFunction from "@helpers/commonFunction";
const { Op } = require("sequelize");

const changePassword = (async (req: Request, res: Response) => {
    try {
        const { currentPassword, newPassword } = req.body;
        // @ts-ignore
        const user_id = req?.user?.id;
        const userData: any = await User.findOne({
            where: {
                id: user_id,
            },
        });
        if (userData) {
            const isComparePassword: any = await bcrypt.compare(currentPassword, userData.password);
            if (isComparePassword) {
                const passwordhash: any = await bcrypt.hash(newPassword, Number(10));
                await User.update(
                    {
                        password: passwordhash,
                    },
                    {
                        where: {
                            id: user_id,
                        },
                        returning: true, // To get the updated record
                    }
                );

                const sendResponse: any = {
                    message: "password changed successfully",
                }
                return response.sendSuccess(req, res, sendResponse);
            } else {
                const sendResponse: any = {
                    message: 'Oops, provide password is incorrect. Please try again with correct password.',
                }
                return response.sendError(res, sendResponse);
            }
        } else {
            const sendResponse: any = {
                message: ' not found',
            }
            return response.sendError(res, sendResponse);
        }
    } catch (err: any) {
        const sendResponse: any = {
            message: err.message,
        }
        logger.info("change Password");
        logger.info(err);
        return response.sendError(res, sendResponse);
    }
})

const getProfile = (async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const user_id = req?.user?.id;
        const u: any = await User.findOne({
            where: {
                id: user_id,
            },
        });
        const sendResponse: any = {
            data: u,
            message: 'get profile successfully',
        }
        return response.sendSuccess(req, res, sendResponse);
    } catch (err: any) {
        const sendResponse: any = {
            message: err.message,
        }
        logger.info("get Profile");
        logger.info(err);
        return response.sendError(res, sendResponse);
    }
})

const updateProfile = (async (req: Request, res: Response) => {
    try {
        const {
            name,
            email,
            phone,
            agencyName,
            country,
            accountType,
            gstNumber,
            panNumber,
            addressLine1,
            addressLine2,
            city,
            state,
            zipCode,
            aadharName,
            aadharNumber,
            aadharAddress,
            profile_pic,
            // user_id
        } = req.body;
        // @ts-ignore
        const user_id = req?.user?.id;

        // Fetch current user data
        const currentUser: any = await User.findOne({
            where: { id: user_id }
        });

        if (!currentUser) {
            return response.sendError(res, { message: "User not found" });
        }

        // Only update fields if present in req.body, otherwise keep old value
        const dataUpdate = {
            name: name ?? currentUser.name,
            email: email ?? currentUser.email,
            phone: phone ?? currentUser.phone,
            agencyName: agencyName ?? currentUser.agencyName,
            country: country ?? currentUser.country,
            accountType: accountType ?? currentUser.accountType,
            gstNumber: gstNumber ?? currentUser.gstNumber,
            panNumber: panNumber ?? currentUser.panNumber,
            addressLine1: addressLine1 ?? currentUser.addressLine1,
            addressLine2: addressLine2 ?? currentUser.addressLine2,
            city: city ?? currentUser.city,
            state: state ?? currentUser.state,
            zipCode: zipCode ?? currentUser.zipCode,
            aadharName: aadharName ?? currentUser.aadharName,
            aadharNumber: aadharNumber ?? currentUser.aadharNumber,
            aadharAddress: aadharAddress ?? currentUser.aadharAddress,
            profile_pic: profile_pic ?? currentUser.profile_pic,
        };

        const [updatedRows] = await User.update(dataUpdate, {
            where: {
                id: user_id,
            },
        });

        const u: any = await User.findOne({
            where: {
                id: user_id,
            },
        });
        const sendResponse: any = {
            data: u,
            message: 'update profile successfully',
        }
        return response.sendSuccess(req, res, sendResponse);
    } catch (err: any) {
        const sendResponse: any = {
            message: err.message,
        }
        logger.info("update Profile");
        logger.info(err);
        return response.sendError(res, sendResponse);
    }
})

const logout = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const user_id = req?.user?.id;
        //const token = req.headers['authorization']?.split(" ")[1];
        const jwtToken: any = req.headers["j-authorization"];
        const token = jwtToken.split(' ')[1];
        ;




        let getToken: any = await TokenModel.findOne({
            where: {
                user_id: user_id,
                token: token,
            },
        });


        if (getToken) {
            const deletedRows = await TokenModel.destroy({
                where: {
                    id: getToken.id,
                },
            });
            const sendResponse: any = {
                message: 'logout successfully',
            }
            return response.sendSuccess(req, res, sendResponse);
        } else {
            const sendResponse: any = {
                message: "Invalid token",
            }
            return response.sendError(res, sendResponse);
        }
    } catch (err: any) {
        const sendResponse: any = {
            message: err.message,
        }
        logger.info("Logout");
        logger.info(err);
        return response.sendError(res, sendResponse);
    }
}


const resetPassword = async (req: Request, res: Response) => {
    try {
        const { password, confirm_password, token } = req.body

        if (!token) {
            const sendResponse: any = {
                message: "token is not valid or missing",
            };
            return response.sendError(res, sendResponse);
        }

        const clientData: any = await jwt.decode(token);

        const expired = new Date(clientData.expiry) <= new Date();
        if (expired) {
            const sendResponse: any = {
                message: "Otp is not valid",
            };
            return response.sendError(res, sendResponse);
        }


        const passwordHash = await bcrypt.hash(password, Number(10));

        const [updatedRows] = await User.update(
            {
                password: passwordHash,
            },
            {
                where: {
                    id: clientData.user_id,
                },
            }
        );

        const sendResponse: any = {
            message: "Password Successfully Changed",
            data: {}
        };

        return response.sendSuccess(req, res, sendResponse);
    } catch (err: any) {
        const sendResponse: any = {
            message: err.message,
        };
        return response.sendError(res, sendResponse);
    }
};

const usersDataGet = (async (id: any) => {
    const u = await User.findOne({
        where: { id },
        attributes: ['id', 'name', 'email', 'profile_pic'],
    });
    return u;
})

const login = async (req: Request, res: Response) => {
    try {
        console.log('run');

        const { email, password, firebase_token } = req.body;

        // Validate required fields
        if (!email || !password) {
            const sendResponse: any = {
                message: 'Email and password are required.',
            };
            return response.sendError(res, sendResponse);
        }

        const userData = await User.findOne({
            where: {
                email,
            },
        });
        if (userData) {
            if (!userData.password) {
                const sendResponse: any = {
                    message: 'The password you entered is invalid. Please check your password and try again.',
                };
                return response.sendError(res, sendResponse);
            }

            // Compare the provided password with the hashed password
            const isPasswordMatch = await bcrypt.compare(password, userData.password);

            if (!isPasswordMatch) {
                const sendResponse: any = {
                    message: 'The password you entered is invalid. Please check your password and try again.',
                };
                return response.sendError(res, sendResponse);
            } else {
                // Generate a JWT token
                let token: any = null;
                if (userData && userData.id) {

                    const dataPass: PassData = {
                        name: userData.name,
                        email: userData.email,
                        user_id: userData.id?.toString(),
                    }
                    token = await jwt.sign(dataPass);
                    // Create an TokenModel record
                    await TokenModel.create({
                        token,
                        firebase_token,
                        type: 'user',
                        user_id: userData.id,
                    });
                }
                const sendData = await usersDataGet(userData.id);
                const usersData = sendData?.toJSON();
                usersData['access_token'] = token;


                const sendResponse: any = {
                    data: usersData ? usersData : {},
                    message: 'You are logged in successfully',
                };

                return response.sendSuccess(req, res, sendResponse);
            }
        } else {
            const sendResponse: any = {
                message: 'The email or password is incorrect.',
            };
            return response.sendError(res, sendResponse);
        }
    } catch (err: any) {

        const sendResponse: any = {
            message: err.message,
        };

        logger.info('Login');
        logger.info(err);

        return response.sendError(res, sendResponse);
    }
};

interface PassData {
    email: string;
    name: string;
    user_id: string;
    // add other properties as needed
}


const signUp = async (req: Request, res: Response) => {
    try {
        const { name, email, phone, gender, password } = req.body;

        const existing = await User.findOne({
            where: { email }
        });
        if (existing) {
            const sendResponse: any = {
                message: "User with this email already exists",
            };
            return response.sendError(res, sendResponse);
        }


        const user = await User.create({
            name,
            email,
            phone,
            gender,
        });

        // Generate OTP
        const otp = 1111; // For demo; use random in production
        // const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const expiry = new Date();
        expiry.setMinutes(expiry.getMinutes() + 10);

        // Save OTP in DB
        await OtpModel.create({
            otp,
            user_id: user.id,
            is_active: true,
            expiry,
        });

        // Optionally send OTP via email/SMS here

        // Generate a token for OTP verification
        const payload = {
            user_id: user.id,
            email: user.email,
            type: "signup_otp",
            expiry: new Date(Date.now() + 15 * 60 * 1000) // 15 min expiry
        };
        const token = await jwt.sign(payload);

        const sendResponse: any = {
            message: "User registered successfully. OTP sent.",
            data: {
                user: user,
                token,
                otp, // For testing/demo only; remove in production!
                otp_expiry: expiry
            }
        };
        return response.sendSuccess(req, res, sendResponse);
    } catch (err: any) {
        const sendResponse: any = {
            message: err.message,
        };
        return response.sendError(res, sendResponse);
    }
};

const verify = async (req: Request, res: Response) => {
    try {
        const { identifier } = req.body;

        // Check if identifier is provided
        if (!identifier) {
            return response.sendError(res, { message: "Email or phone is required." });
        }

        // Import Op from sequelize directly
        const userData = await User.findOne({
            where: {
                [Op.or]: [
                    { email: identifier },
                    { phone: identifier }
                ]
            }
        });

        if (!userData) {
            return response.sendError(res, { message: "User with given email or phone doesn't exist." });
        }

        return response.sendSuccess(req, res, {
            message: "Verification sent successfully.",
            data: userData
        });
    } catch (err: any) {
        logger.info("Verify");
        logger.info(err);
        return response.sendError(res, { message: err.message });
    }
};
const forgetPassword = async (req: Request, res: Response) => {
    try {
        // Accept either email or phone from the request body
        const { email, phone, identifier } = req.body;

        // Determine identifier value
        const userIdentifier = email || phone || identifier;

        // Check if identifier is provided
        if (!userIdentifier) {
            return response.sendError(res, { message: "Email or phone is required." });
        }

        // Find user by email or phone
        const userData = await User.findOne({
            where: {
                [Op.or]: [
                    { email: userIdentifier },
                    { phone: userIdentifier }
                ]
            }
        });

        if (!userData) {
            return response.sendError(res, { message: "User with given email or phone doesn't exist." });
        }

        // Generate OTP
        const otp = 1111;
        // const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const expiry = new Date();
        expiry.setMinutes(expiry.getMinutes() + 10);

        // Save OTP in DB
        await OtpModel.create({
            otp,
            user_id: userData.id,
            is_active: true,
            expiry,
        });

        // Get current server time
        const currentTime = new Date();

        // Send OTP via email if identifier is email
        if (userData.email && userIdentifier === userData.email) {
            try {
                let to: any = userData.email;
                let subject: any = process.env.APP_NAME + ' Verification OTP';
                let template: any = 'verify-otp';
                let sendEmailTemplatedata: any = {
                    name: userData.name,
                    otp: otp,
                    app_name: process.env.APP_NAME,
                };

                let datta: any = {
                    to: to,
                    subject: subject,
                    template: template,
                    sendEmailTemplatedata: sendEmailTemplatedata
                };

                await CommonFunction.sendEmailTemplate(datta);
            } catch (err) {
                logger.info("Verify send email error");
                logger.info(err);
            }
        }

        // You can add SMS sending logic here if identifier is phone

        return response.sendSuccess(req, res, {
            message: "OTP sent successfully.",
            data: {
                user: userData,
                otp, // For testing/demo only; remove in production!
                otp_expiry: expiry,
                server_time: currentTime
            }
        });
    } catch (err: any) {
        logger.info("Verify");
        logger.info(err);
        return response.sendError(res, { message: err.message });
    }
};

const forgetPasswordOtpVerify = async (req: Request, res: Response) => {
    try {
        const { email, phone, otp } = req.body;
        const identifier = email || phone;

        if (!identifier || !otp) {
            return response.sendError(res, { message: "Email/phone and OTP are required." });
        }

        // Find user
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { email: identifier },
                    { phone: identifier }
                ]
            }
        });
        if (!user) {
            return response.sendError(res, { message: "User not found." });
        }

        // Find OTP record
        const otpRecord = await OtpModel.findOne({
            where: {
                user_id: user.id,
                otp: otp,
                is_active: true,
                expiry: { [Op.gt]: new Date() }
            }
        });
        if (!otpRecord) {
            return response.sendError(res, { message: "Invalid or expired OTP." });
        }

        // Deactivate OTP after use
        await OtpModel.update({ is_active: false }, { where: { id: otpRecord.id } });

        // Issue a short-lived token for password reset
        const payload = {
            user_id: user.id,
            email: user.email,
            type: "reset_password",
            expiry: new Date(Date.now() + 15 * 60 * 1000) // 15 min expiry
        };
        const token = await jwt.sign(payload);

        return response.sendSuccess(req, res, {
            message: "OTP verified. Use this token to set a new password.",
            data: { token: token }
        });

    } catch (err: any) {
        logger.info("forgetPasswordOtpVerify");
        logger.info(err);
        return response.sendError(res, { message: err.message });
    }
};

/**
 * 2. Set new password using the token
 */
const setPassword = async (req: Request, res: Response) => {
    try {
        const { token, password } = req.body;
        if (!token || !password) {
            return response.sendError(res, { message: "Token and new password are required." });
        }

        // Decode and validate token
        let decoded: any;
        try {
            decoded = await jwt.decode(token);
        } catch (err) {
            return response.sendError(res, { message: "Invalid token." });
        }

        if (!decoded || decoded.type !== "reset_password" || !decoded.user_id) {
            return response.sendError(res, { message: "Invalid or expired token." });
        }

        // Check expiry
        if (new Date(decoded.expiry) <= new Date()) {
            return response.sendError(res, { message: "Token expired." });
        }

        // Update password
        const passwordHash = await bcrypt.hash(password, Number(10));
        await User.update({ password: passwordHash }, { where: { id: decoded.user_id } });

        return response.sendSuccess(req, res, { message: "Password set successfully." });
    } catch (err: any) {
        logger.info("setPassword");
        logger.info(err);
        return response.sendError(res, { message: err.message });
    }
};

export default {
    changePassword,
    getProfile,
    updateProfile,
    logout,
    forgetPassword,
    login,
    resetPassword,
    signUp,
    verify,
    forgetPasswordOtpVerify,
    setPassword,

}