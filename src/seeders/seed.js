import db from "../utils/database.js";
import Users from "../models/users.models.js";
import Todos from "../models/todos.models.js";
import Categories from "../models/categories.models.js";
import TodosCategories from "../models/todosCategories.models.js";

const users = [
  {
    username: "admin",
    email: "luis@admin.com",
    password: "1234",
  },
  {
    username: "luis",
    email: "angel@admin.com",
    password: "1234",
  },
];

const todos = [
  {
    title: "title 1",
    description: "description 2",
    userId: 1,
  },
  {
    title: "title 123",
    description: "description 1232",
    userId: 2,
  },
  {
    title: "title 3",
    description: "description 3",
    userId: 2,
  },{
    title: "title 4",
    description: "description 4",
    userId: 1,
  },
];

const categories = [
  { name: "personal" },
  { name: "educacion" },
  { name: "salud" },
  { name: "trabajo" },
  { name: "hogar" },
  { name: "cocina" },
  { name: "deporte" },
  { name: "ocio" },
  { name: "financiero" },
  { name: "entretenimiento" },
];


const todosCategories = [
  { categoryId: 1, todosId: 1 },
  { categoryId: 2, todosId: 1 },
  { categoryId: 4, todosId: 1 },
  { categoryId: 1, todosId: 2 },
  { categoryId: 7, todosId: 2 },
  { categoryId: 10, todosId: 2 },
  { categoryId: 3, todosId: 2 },
  { categoryId: 5, todosId: 3 },
  { categoryId: 6, todosId: 3 },
  { categoryId: 1, todosId: 4 },
  { categoryId: 3, todosId: 4 },
];

/**
 * create
 * findOne, findall, findByPk
 * update
 * destroy
 */
db.sync({ force: true })
  .then(() => {
    users.forEach((user) => Users.create(user));
    console.log("seed information");

    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100);
    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 150);
    setTimeout(() => {
      todosCategories.forEach((todoCategory) =>
        TodosCategories.create(todoCategory)
      );
    }, 200);
    console.log("seed todos");
  })
  .catch((error) => console.log(error));
