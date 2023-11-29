import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize
} from "sequelize";
import { User } from "./user";

export class Posts extends Model<
  InferAttributes<Posts>,
  InferCreationAttributes<Posts>
> {
  declare postId: number;
  declare post: string;
  declare imageUrl: string;
  declare userId: number;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

export function PostsFactory(sequelize: Sequelize) {
  Posts.init(
    {
      postId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: "compositeIndex"
      },
      post: {
        type: DataTypes.STRING,
        allowNull: true
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {
      freezeTableName: true,
      tableName: "posts",
      sequelize
    }
  );
}

export function AssociateUserPost() {
  User.hasMany(Posts, { foreignKey: "userId" });
  Posts.belongsTo(User, { foreignKey: "userId" });
}
