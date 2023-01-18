import express from "express";
import initModels from "./models/init.models.js";
import db from "./utils/database.js";
import userRoutes from './routes/users.routes.js'
import todosRoutes from './routes/todos.routes.js'
import authRoutes from './routes/auth.routes.js'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()
const app = express();
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT;

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

app.use("/api", userRoutes)
app.use("/api", todosRoutes )
app.use('/api', authRoutes)


// // actualizar password
// app.put("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const field = req.body;
//     const result = Users.update(field, {
//       where: { id },
//     });
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(400).json(error.message);
//   }
// });
// // delete
// app.delete("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = Users.destroy({ where: { id } });
//     req.status(200).json(result);
//   } catch (error) {
//     res.status(400).json(error.message);
//   }
// });

// // todos

// app.get("/todos", async (req, res) => {
//   try {
//     const result = await Todos.findAll();
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(400).json(error.message);
//   }
// });
// app.get("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Todos.findByPk(id);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(400).json(error.message);
//   }
// });
// app.post("/todos", async (req, res) => {
//   try {
//     const todos = req.body;
//     const result = await Todos.create(todos);
//     res.status(201).json(result);
//   } catch (error) {
//     res.status(400).json(error.message);
//   }
// });
// app.put("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const field = req.body;
//     const result = await Todos.update(field, {
//       where: { id },
//     });
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(400).json(error.message);
//   }
// });
// app.delete('/todos/:id', async (req, res)=>{
//   try {
//     const {id} = req.params
//     const result = await Todos.destroy({where: {id}})
//     res.status(200).json(result)
//   } catch (error) {
//     res.status(400).json(error.message)
//   }
// })
app.listen(PORT, () => {
  console.log(`server in port ${PORT}`);
});
