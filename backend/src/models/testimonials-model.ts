import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "@models/init";

interface TestimonialAttributes {
  id?: number;
  name: string;
  description: string;
  image: string;
  designation: string;
  company: string;
  company_logo: string;
  rating: number;
  createdAt?: Date;
  updatedAt?: Date;
  is_active?: boolean;
  is_deleted?: boolean;
}

type TestimonialCreationAttributes = Optional<
  TestimonialAttributes,
  "id" | "createdAt" | "updatedAt" | "is_active" | "is_deleted"
>;

class Testimonial
  extends Model<TestimonialAttributes, TestimonialCreationAttributes>
  implements TestimonialAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public image!: string;
  public designation!: string;
  public company!: string;
  public company_logo!: string;
  public rating!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  public is_active!: boolean;
  public is_deleted!: boolean;
}

Testimonial.init(
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
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_logo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
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
    tableName: "testimonials",
    modelName: "Testimonial",
    timestamps: true,
  }
);

export default Testimonial;
