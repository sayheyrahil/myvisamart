import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { sequelize } from './init';

class ContactModel extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public phone!: number;
    public message!: string;
}

ContactModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        message: {
            type: DataTypes.STRING,
        },
        
    },
    {
        sequelize, // Pass the Sequelize instance
        modelName: 'Contact', // Define the model name
        tableName: 'contacts', // Define the table name (optional)
        timestamps: true,
    }
);

export default ContactModel;