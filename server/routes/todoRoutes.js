import { Router } from "express";
import { createTodo, readTodo } from "../controllers/todoControllers.js";

export const todosRouter = Router();

todosRouter.post('/todo', createTodo);
todosRouter.get('/todo', readTodo)