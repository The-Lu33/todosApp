import db from "../utils/database.js";
import Users from "../models/users.models.js";
import Todos from "../models/todos.models.js";

const users = [
  {
    username: "admin",
    email: "luis@admin.com",
    password: "1234",
  },{
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
];

const categories = [{}];

const todosCategories = [];
/**
 * create
 * findOne, findall, findByPk
 * update
 * destroy
 */
db.sync({force: true})
  .then(() => {
    users.forEach((user) => Users.create(user));
    console.log("seed information");

    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100);
    console.log('seed todos');
  })
  .catch((error) => console.log(error));
