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
  is_top_destination?: boolean;
  is_popular?: boolean;
  countries?: string; // Store as comma-separated string or JSON string
  subtitle?: string;
  rating?: number;
  required_documents?: object[];
  visa_information?: object[];
  transit_timeline?: object[];
  continent?: string;
  visa_fee_now?: number;
  service_fee_now?: number;
  visa_fee_later?: number;
  service_fee_later?: number;
}

type CountriesCreationAttributes = Optional<
  CountriesAttributes,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "is_active"
  | "is_deleted"
  | "is_top_destination"
  | "is_popular"
  | "countries"
  | "subtitle"
  | "rating"
  | "continent"
  | "visa_fee_now"
  | "service_fee_now"
  | "visa_fee_later"
  | "service_fee_later"
>;

class Countries
  extends Model<CountriesAttributes, CountriesCreationAttributes>
  implements CountriesAttributes
{
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
  public is_top_destination!: boolean;
  public is_popular!: boolean;
  public countries!: string;
  public subtitle!: string;
  public rating!: number;
  public continent!: string;
  public required_documents!: object[];
  public visa_fee_now!: number;
  public service_fee_now!: number;
  public visa_fee_later!: number;
  public service_fee_later!: number;
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
      // Remove unique constraint here to avoid "Too many keys specified" error
      // unique: true,
      // If you still want uniqueness, create a unique index via migration or manually in DB
    },
    is_top_destination: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_popular: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    countries: {
      type: DataTypes.TEXT, // Store as comma-separated or JSON string
      allowNull: true,
      defaultValue: "",
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    required_documents: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    visa_information: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    transit_timeline: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    visa_fee_now: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    service_fee_now: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    visa_fee_later: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    service_fee_later: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
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
