import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  getTodoCategories,
  updateTodo,
} from "../controllers/todos.controllers.js";
import { authMiddleware } from "../middlwares/auth.middlewares.js";

const router = Router();

router.get("/todos", authMiddleware, getAllTodos);

router.get("/todos/:id", getTodoById);

router.get("/todos/:id/categories", getTodoCategories);

router.post("/todos", createTodo);

router.put("/todos/:id", updateTodo);

router.delete("/todos/:id", deleteTodo);

export default router;
