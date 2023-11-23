import { Sequelize } from "sequelize";
import { AssociateUserPost, PostsFactory } from "./posts";
import { UserFactory } from "./user";

const dbName = "technodeDB";
const username = "root";
const password = "Password1!";

const sequelize = new Sequelize(dbName, username, password, {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql"
});

PostsFactory(sequelize);
UserFactory(sequelize);
AssociateUserPost();
export const db = sequelize;
