import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "@models/init";

interface ApplicantAttributes {
  id?: number;
  visa_application_id: number;
  visa_unique_code?: string | null;
  user_id?: number | null; // Added field
  first_name?: string | null;
  last_name?: string | null;
  dob?: Date | null;
  gender?: "MALE" | "FEMALE" | "OTHER" | null;
  passport_number?: string | null;
  photo?: string | null;
  passport_file?: string | null;
  extra_data?: object | null;
  created_at?: Date;
  updatedAt?: Date;
}

type ApplicantCreationAttributes = Optional<
  ApplicantAttributes,
  "id" | "visa_unique_code" | "user_id" | "first_name" | "last_name" | "dob" | "gender" | "passport_number" | "photo" | "passport_file" | "extra_data" | "created_at" | "updatedAt"
>;

class Applicant
  extends Model<ApplicantAttributes, ApplicantCreationAttributes>
  implements ApplicantAttributes
{
  public id!: number;
  public visa_application_id!: number;
  public visa_unique_code!: string | null;
  public user_id!: number | null; // Added field
  public first_name!: string | null;
  public last_name!: string | null;
  public dob!: Date | null;
  public gender!: "MALE" | "FEMALE" | "OTHER" | null;
  public passport_number!: string | null;
  public photo!: string | null;
  public passport_file!: string | null;
  public extra_data!: object | null; 
}


Applicant.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    visa_application_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    visa_unique_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM("MALE", "FEMALE", "OTHER"),
      allowNull: true,
    },
    passport_number: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    passport_file: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    extra_data: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "applicants",
    modelName: "Applicant",
    timestamps: false, // since we use created_at, not createdAt
    updatedAt: "updatedAt",
  }
);

export default Applicant;
