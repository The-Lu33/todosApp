import Categories from "./categories.models.js";
import TodosCategories from "./todos-categories.models.js";
import Todos from "./todos.models.js";
import Users from "./users.models.js";

const initModels = () => {
  // relaciones
  // hasOne => tiene uno solo
  // hasMany => tiene muchos
  // belongsTo => pertenece a

  Todos.belongsTo(Users, { as: "author", foreignKey: "user_id" });
  Users.hasMany(Todos, { as: "task", foreignKey: "user_id" });

  // relacion m-m

  TodosCategories.belongsTo(Todos, { as: "task", foreignKey: "todo_id" });
  Todos.hasMany(TodosCategories, { as: "category", foreignKey: "todo_id" });

  TodosCategories.belongsTo(Categories, {
    as: "category",
    foreignKey: "category_id",
  });
  Categories.hasMany(TodosCategories, {
    as: "task",
    foreignKey: "category_id",
  });
};

export default initModels;
