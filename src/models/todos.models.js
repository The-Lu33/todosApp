import { DataTypes } from "sequelize";
import db from "../utils/database.js";
import Users from "./users.models.js";

const Todos = db.define("todos", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: "is_complete",
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: "false",
    field: "user_id",
    references: {
      model: Users,
      key: "id",
    },
  },
});

export default Todos;
