import { Request, Response, NextFunction } from "express";
import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "har har mahadev";

// Decrypt incoming request body
export function decryptBody(req: Request, res: Response, next: NextFunction) {
  if (
    req.is("application/json") &&
    typeof req.body === "string" &&
    req.body.trim().length > 0
  ) {
    try {
      const bytes = CryptoJS.AES.decrypt(req.body, ENCRYPTION_KEY);
      const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
      req.body = JSON.parse(decryptedString);
    } catch (err) {
      // If decryption fails, continue with original body
    }
  }
  next();
}

// Encrypt outgoing response
export function encryptJsonResponse(req: Request, res: Response, next: NextFunction) {
  const originalJson = res.json;
  res.json = function (body: any) {
    try {
      const stringData = typeof body === "string" ? body : JSON.stringify(body);
      const encrypted = CryptoJS.AES.encrypt(stringData, ENCRYPTION_KEY).toString();
      return originalJson.call(this, encrypted);
    } catch (err) {
      return originalJson.call(this, body);
    }
  };
  next();
}
