import express from "express";
import { where } from "sequelize";
import initModels from "./models/init.models.js";
import Todos from "./models/todos.models.js";
import Users from "./models/users.models.js";
import db from "./utils/database.js";

const app = express();
app.use(express.json());
const PORT = 3000;

db.authenticate()
  .then(() => console.log("conectado a db"))
  .catch((error) => console.log(error));

initModels();

db.sync({ alter: true, force: false })
  .then(() => console.log("base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "serven in run" });
});

app.get("/users", async (req, res) => {
  try {
    const result = await Users.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

// por id
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});
// por username
app.get("/users/username/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const result = await Users.findOne({ where: { username } });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});
// crear user
app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
// actualizar password
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = Users.update(field, {
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
// delete
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = Users.destroy({ where: { id } });
    req.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// todos

app.get("/todos", async (req, res) => {
  try {
    const result = await Todos.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todos.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
app.post("/todos", async (req, res) => {
  try {
    const todos = req.body;
    const result = await Todos.create(todos);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await Todos.update(field, {
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
app.delete('/todos/:id', async (req, res)=>{
  try {
    const {id} = req.params
    const result = await Todos.destroy({where: {id}})
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
app.listen(PORT, () => {
  console.log(`server in port ${PORT}`);
});
