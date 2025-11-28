import { DataTypes, Model } from 'sequelize';
import { sequelize } from './init';

class SocialMediaModel extends Model {
  public id!: number;
  public platform!: string;
  public url!: string;
  public is_deleted!: boolean;
  public is_active!: boolean;
}

SocialMediaModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
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
    modelName: 'SocialMedia',
    tableName: 'social_media',
    timestamps: true,
  }
);

export default SocialMediaModel;
