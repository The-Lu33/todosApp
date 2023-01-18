import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  getUserWhithThask,
} from "../controllers/users.controller.js";
const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users/", createUser);


// usuario con sus tareas
router.get("/users/:id/todos", getUserWhithThask);

export default router;
