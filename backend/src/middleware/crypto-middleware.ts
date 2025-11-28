import { Request, Response, NextFunction } from "express";
import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = "har har mahadev";

// Decrypt utility function
export function decryptData(encryptedText: string) {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedText, ENCRYPTION_KEY);
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
    try {
      return JSON.parse(decryptedString);
    } catch {
      return decryptedString;
    }
  } catch (err) {
    console.log("Decryption failed:", err);
    return null;
  }
}

// Encrypt utility function
export function encryptData(data: any) {
  const stringData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(stringData, ENCRYPTION_KEY).toString();
}

// Middleware: Decrypt incoming request body
export function decryptBody(req: Request, res: Response, next: NextFunction) {
  // Normalize is_confirm header to string for comparison
  const isConfirmHeader = req.headers && req.headers['is_confirm'];
  const isConfirm =
    isConfirmHeader === 'true' ||
    (Array.isArray(isConfirmHeader) && isConfirmHeader.includes('true'));
  if (!isConfirm && typeof req.body === "string" && req.body.trim().length > 0) {
    const decrypted = decryptData(req.body);
    if (decrypted) {
      req.body = decrypted;
    }
  }
  next();
}

// Middleware: Encrypt outgoing response
export function encryptJsonResponse(req: Request, res: Response, next: NextFunction) {
  const originalJson = res.json;
  res.json = function (body: any) {
    // Normalize is_confirm header to string for comparison
    const isConfirmHeader = req.headers && req.headers['is_confirm'];
    const isConfirm =
      isConfirmHeader === 'true' ||
      (Array.isArray(isConfirmHeader) && isConfirmHeader.includes('true'));
    if (!isConfirm) {
      try {
        const encrypted = encryptData(body);
        return originalJson.call(this, encrypted);
      } catch (err) {
        return originalJson.call(this, body);
      }
    } else {
      return originalJson.call(this, body);
    }
  };
  next();
}
