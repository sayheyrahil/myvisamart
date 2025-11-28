import randomString from 'randomstring';
import jsonwebtoken, { JwtPayload, SignOptions } from 'jsonwebtoken';
import { JWT_EXPIRATION, JWT_SECRET } from '@config/index';

// Errors
const errors = {
    validation: 'JSON-web-token validation failed.',
} as const;

const secret: any = JWT_SECRET;
const options: SignOptions = {
    expiresIn: Number(JWT_EXPIRATION), // Use the imported config value, which should be string | number
};

// Types
type TDecoded = string | JwtPayload | undefined;

function sign(data: JwtPayload): Promise<string> {
    return new Promise((resolve, reject) => {
        jsonwebtoken.sign(data, secret, options, (err, token) => {
            if (err) reject(err);
            else resolve(token || '');
        });
    });
}

function decode(data: string): Promise<TDecoded> {
    return new Promise((res, rej) => {
        jsonwebtoken.verify(data, secret, (err: any, decoded: any) => {
            return err ? rej(errors.validation) : res(decoded);
        });
    });
}

// Export default
export default {
    sign,
    decode,
};
