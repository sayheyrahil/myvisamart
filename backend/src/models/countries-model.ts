import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "@models/init";

interface CountriesAttributes {
  id?: number;
  name: string;
  description: string;
  image: string;
  icon: string;
  dail_code: string;
  detail: string;
  visa_process_time: string;
  amount: number;
  pay_later_amount: number;
  createdAt?: Date;
  updatedAt?: Date;
  is_active?: boolean;
  is_deleted?: boolean;
  slug: string;
}

type CountriesCreationAttributes = Optional<
  CountriesAttributes,
  "id" | "createdAt" | "updatedAt" | "is_active" | "is_deleted"
>;

class Countries extends Model<CountriesAttributes, CountriesCreationAttributes> implements CountriesAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public image!: string;
  public icon!: string;
  public dail_code!: string;
  public detail!: string;
  public visa_process_time!: string;
  public amount!: number;
  public pay_later_amount!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  public is_active!: boolean;
  public is_deleted!: boolean;
  public slug!: string;
}

Countries.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dail_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    visa_process_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    pay_later_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "countries",
    modelName: "Countries",
    timestamps: true,
  }
);

export default Countries;
