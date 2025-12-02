import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "@models/init";

interface CategoryAttributes {
  id?: number;
  name: string;
  description: string;
   image: string;
   createdAt?: Date;
  updatedAt?: Date;
  is_active?: boolean;
  is_deleted?: boolean;
}

type HappyClientCreationAttributes = Optional<CategoryAttributes, "id" | "createdAt" | "updatedAt" | "is_active" | "is_deleted">;

class HappyClient extends Model<CategoryAttributes, HappyClientCreationAttributes> implements CategoryAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
   public image!: string;
   public createdAt!: Date;
  public updatedAt!: Date;
  public is_active!: boolean;
  public is_deleted!: boolean;
}

HappyClient.init(
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
      //  get() {
      //   const rawValue = this.getDataValue("image");
      //   return typeof rawValue === "string" && rawValue
      //     ? `${process.env.API_URL}${rawValue}`
      //     : null;
      // },
      // set(value: string) {
      //   // Custom setter for image_path
      //   this.setDataValue("image", value);
      // },
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
    tableName: "categories",
    modelName: "Category",
    timestamps: true,
  }
);

export default HappyClient;
