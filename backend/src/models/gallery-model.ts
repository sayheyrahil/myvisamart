import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "@models/init";

interface GalleryAttributes {
  id?: number;
  title: string;
  images: string[]; // Array of image URLs/paths
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  is_active?: boolean;
  is_deleted?: boolean;
}

type GalleryCreationAttributes = Optional<GalleryAttributes, "id" | "createdAt" | "updatedAt" | "is_active" | "is_deleted">;

class Gallery extends Model<GalleryAttributes, GalleryCreationAttributes> implements GalleryAttributes {
  public id!: number;
  public title!: string;
  public images!: string[];
  public description!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public is_active!: boolean;
  public is_deleted!: boolean;
}

Gallery.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON, // Store array of strings as JSON
      allowNull: false,
      defaultValue: [],
      // get() {
      //   const rawValue = this.getDataValue("images");
      //   if (Array.isArray(rawValue)) {
      //     const baseUrl = process.env.API_URL || "";
      //     return rawValue.map((img: string) =>
      //       img && typeof img === "string"
      //         ? (img.startsWith("http://") || img.startsWith("https://") ? img : `${baseUrl}${img}`)
      //         : img
      //     );
      //   }
      //   return [];
      // },
      // set(value: string[]) {
      //   this.setDataValue("images", value);
      // },
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
    tableName: "galleries",
    modelName: "Gallery",
    timestamps: true,
  }
);

export default Gallery;
