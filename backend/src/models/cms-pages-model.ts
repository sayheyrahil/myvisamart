import { DataTypes, Model } from 'sequelize';
import { sequelize } from './init';

class CmsPagesModel extends Model {
  public id!: number;
  public name!: string;
  public content!: string;
  public title!: string;
  public is_deleted!: boolean;
  public is_active!: boolean;
}

CmsPagesModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     content: {
      type: DataTypes.TEXT('long'),
      get() {
        // Custom getter for description
        const rawValue = this.getDataValue("content");
        return rawValue
          ? `${rawValue}`
          : "No content provided";
      },
      set(value) {
        // Custom setter for content
        this.setDataValue("content", value);
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'Cms Pages',
    tableName: 'cms_pages',
    timestamps: true,
  }
);

export default CmsPagesModel;
