import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { sequelize } from './init';

class UserModel extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public phone!: string;
    public profile_pic!: string;
    public status!: string;
    public is_deleted!: boolean;
    public is_active!: boolean;

    // Add agency profile fields
    public agencyName!: string;
    public accountType!: string;
    public gstNumber!: string;
    public panNumber!: string;
    public addressLine1!: string;
    public addressLine2!: string;
    public city!: string;
    public state!: string;
    public zipCode!: string;
    public aadharName!: string;
    public aadharNumber!: string;
    public aadharAddress!: string;
}

UserModel.init(
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
        street: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        region: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pan: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        aadhaar: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gst: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        profile_pic: {
            type: DataTypes.STRING,
            defaultValue: process.env.DEFAULT_PROFILE_PIC,
            get() {
                const rawValue = this.getDataValue("profile_pic");
                return rawValue ? `${process.env.API_URL}${rawValue}` : null;
            },
            set(value) {
                // Custom setter for image_path
                this.setDataValue("profile_pic", value);
            },
        },
        password: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 1,
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        agencyName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        accountType: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gstNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        panNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        addressLine1: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        addressLine2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        zipCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        aadharName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        aadharNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        aadharAddress: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize, // Pass the Sequelize instance
        modelName: 'User', // Define the model name
        tableName: 'users', // Define the table name (optional)
        timestamps: true,
    }
);

export default UserModel;