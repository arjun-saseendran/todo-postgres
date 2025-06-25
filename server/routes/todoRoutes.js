import { Router } from "express";
import { createTodo } from "../controllers/todoControllers";

export const todosRouter = Router();

todosRouter.post('/todo', createTodo)