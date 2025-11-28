import { DataTypes, Model } from 'sequelize';
import { sequelize } from './init';

class ContactInfoModel extends Model {
  public id!: number;
  public name!: string;
  public phone!: string;
  public phone_2!: string;
  public email!: string;
  public email_2!: string;
  public location!: string;
  public mapIframe!: string;
  public is_deleted!: boolean;
  public is_active!: boolean;

}

ContactInfoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email_2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mapIframe: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'ContactInfo',
    tableName: 'contact_info',
    timestamps: true,
  }
);

export default ContactInfoModel;
