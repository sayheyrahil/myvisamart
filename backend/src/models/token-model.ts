import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { sequelize } from './init';

class TokenModel extends Model {
    public id!: number;
    public type!: string;
    public user_id!: string;
    public token!: string;
    public firebase_token!: string;
}

TokenModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED, // you can omit the `DataTypes.` if you import them individually
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: new DataTypes.STRING(128),
            defaultValue: 'user',
        },
        user_id: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        token: {
            type: new DataTypes.STRING(500),
            allowNull: false,
        },
        firebase_token: {
            type: new DataTypes.STRING(128),
            defaultValue: 'Test'
        },

    },
    {
        sequelize, // Pass the Sequelize instance
        modelName: 'TokenModel', // Define the model name
        tableName: 'tokens', // Define the table name (optional)
        timestamps: true,
    }
);

export default TokenModel;