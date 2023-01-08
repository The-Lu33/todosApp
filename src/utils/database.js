import { Sequelize } from "sequelize";
const db = new Sequelize({
  database: "todoapp",
  username: "postgres",
  host: "localhost",
  port: "4000",
  password: 'root',
  dialect: "postgres",
});

export default db;
