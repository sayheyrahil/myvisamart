import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "@models/init";

interface FaqAttributes {
  id?: number;
  name: string;
  question: string;
  answer: string;
  type: string;
  slug: string;
  createdAt?: Date;
  updatedAt?: Date;
  is_active?: boolean;
  is_deleted?: boolean;
}

type FaqCreationAttributes = Optional<FaqAttributes, "id" | "createdAt" | "updatedAt" | "is_active" | "is_deleted">;

class Faq extends Model<FaqAttributes, FaqCreationAttributes> implements FaqAttributes {
  public id!: number;
  public name!: string;
  public question!: string;
  public answer!: string;
  public type!: string;
  public slug!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public is_active!: boolean;
  public is_deleted!: boolean;
}

Faq.init(
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
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
  },
  {
    sequelize,
    tableName: "Faqs",
    modelName: "Faq",
    timestamps: true,
  }
);

export default Faq;
