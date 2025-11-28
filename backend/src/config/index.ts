import { config } from 'dotenv';
config();

export const {
    NODE_ENV,
    PORT,
    JWT_SECRET,
    JWT_EXPIRATION,  
    API_URL,   
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_DATABASE

} = process.env;
