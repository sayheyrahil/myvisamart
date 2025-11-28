import { Sequelize } from 'sequelize';
import {
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
} from "@config/index";


const sequelize = new Sequelize({
    dialect: 'mysql', // or any other supported database dialect
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    logging: false,

});

export { sequelize };