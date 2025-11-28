import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "@models/init";

interface BlogAttributes {
  id?: number;
   title: string;
  date: Date;
  shortDescription: string;
  description: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
  is_active?: boolean;
  is_deleted?: boolean;
}

type BlogCreationAttributes = Optional<BlogAttributes, "id" | "createdAt" | "updatedAt" | "is_active" | "is_deleted">;

class Blog extends Model<BlogAttributes, BlogCreationAttributes> implements BlogAttributes {
  public id!: number;
   public title!: string;
  public date!: Date;
  public shortDescription!: string;
  public description!: string;
  public image!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public is_active!: boolean;
  public is_deleted!: boolean;
}

Blog.init(
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    shortDescription: {
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
    //     const rawValue = this.getDataValue("image");
    //     return typeof rawValue === "string" && rawValue
    //       ? `${process.env.API_URL}${rawValue}`
    //       : null;
    //   },
    //   set(value: string) {
    //     // Custom setter for image_path
    //     this.setDataValue("image", value);
    //   },
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
    tableName: "blogs",
    modelName: "Blog",
    timestamps: true,
  }
);

export default Blog;
