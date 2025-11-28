import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "@models/init";

interface HappyClientAttributes {
  id?: number;
  name: string;
  description: string;
  designation: string;
  image: string;
  star_count: number;
  createdAt?: Date;
  updatedAt?: Date;
  is_active?: boolean;
  is_deleted?: boolean;
}

type HappyClientCreationAttributes = Optional<HappyClientAttributes, "id" | "createdAt" | "updatedAt" | "is_active" | "is_deleted">;

class HappyClient extends Model<HappyClientAttributes, HappyClientCreationAttributes> implements HappyClientAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public designation!: string;
  public image!: string;
  public star_count!: number;
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
    designation: {
      type: DataTypes.STRING,
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
    star_count: {
      type: DataTypes.INTEGER,
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
  },
  {
    sequelize,
    tableName: "happy_clients",
    modelName: "HappyClient",
    timestamps: true,
  }
);

export default HappyClient;
