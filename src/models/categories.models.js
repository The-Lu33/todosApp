import db from "../utils/database.js";
import { DataTypes } from "sequelize";

const Categories = db.define(
  "categories",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
  },
  {
    timestamps: false,
  }
);

export default Categories
