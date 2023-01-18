import db from "../utils/database.js";
import { DataTypes } from "sequelize";
import Categories from "./categories.models.js";
import Todos from "./todos.models.js";

const TodosCategories = db.define(
  "todos_categories",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id",
      references: {
        model: Categories,
        key: "id",
      },
    },
    todosId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "todos_id",
      references: {
        model: Todos,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

export default TodosCategories;
