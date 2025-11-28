import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "@models/init";

interface ProductAttributes {
  id?: number;
  name: string;
  image: string;
  productList?: string[]; // <-- Add this line
   description: string;
  createdAt?: Date;
  updatedAt?: Date;
  is_active?: boolean;
  is_deleted?: boolean;
}

type ProductCreationAttributes = Optional<ProductAttributes, "id" | "createdAt" | "updatedAt" | "is_active" | "is_deleted" >;

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public image!: string;
  public productList?: string[]; // <-- Add this line
   public description!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public is_active!: boolean;
  public is_deleted!: boolean;
}

Product.init(
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
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      // get() {
      //   const rawValue = this.getDataValue("image");
      //   return typeof rawValue === "string" && rawValue
      //     ? `${process.env.API_URL}${rawValue}`
      //     : null;
      // },
      // set(value: string) {
      //   this.setDataValue("image", value);
      // },
    },
    productList: {
      type: DataTypes.JSON,
      allowNull: true,
     
    },
     
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
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
    tableName: "products",
    modelName: "Product",
    timestamps: true,
  }
);

export default Product;
