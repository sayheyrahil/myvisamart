import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from './init';

// VisaApplication model definition
interface VisaApplicationAttributes {
  id?: number;
  user_id: number;
  country_id: number;
  unique_code: string;
  selected_sponsor: "self" | "parent" | "company" | "other";
  selected: "yes" | "no";
  status?: "draft" | "submitted" | "verified" | "approved" | "rejected";
  createdAt?: Date;
  updatedAt?: Date;
}

type VisaApplicationCreationAttributes = Optional<
  VisaApplicationAttributes,
  "id" | "status" | "createdAt" | "updatedAt"
>;

class VisaApplication
  extends Model<VisaApplicationAttributes, VisaApplicationCreationAttributes>
  implements VisaApplicationAttributes
{
  public id!: number;
  public user_id!: number;
  public country_id!: number;
  public unique_code!: string;
  public selected_sponsor!: "self" | "parent" | "company" | "other";
  public selected!: "yes" | "no";
  public status!: "draft" | "submitted" | "verified" | "approved" | "rejected";
 
}

VisaApplication.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    country_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    unique_code: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    selected_sponsor: {
      type: DataTypes.ENUM("self", "parent", "company", "other"),
      allowNull: false,
    },
    selected: {
      type: DataTypes.ENUM("yes", "no"),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("draft", "submitted", "verified", "approved", "rejected"),
      defaultValue: "draft",
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "visa_applications",
    modelName: "VisaApplication",
    timestamps: true,
  }
);

export default VisaApplication;