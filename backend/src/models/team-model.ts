import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "@models/init";

interface TeamAttributes {
  id?: number;
  name: string;
  image: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  is_active?: boolean;
  is_deleted?: boolean;
}

type TeamCreationAttributes = Optional<TeamAttributes, "id" | "createdAt" | "updatedAt" | "is_active" | "is_deleted">;

class Team extends Model<TeamAttributes, TeamCreationAttributes> implements TeamAttributes {
  public id!: number;
  public name!: string;
  public image!: string;
  public description!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public is_active!: boolean;
  public is_deleted!: boolean;
}

Team.init(
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
      //   // Custom setter for image_path
      //   this.setDataValue("image", value);
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
    tableName: "teams",
    modelName: "Team",
    timestamps: true,
  }
);

export default Team;
