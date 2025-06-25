import { Router } from "express";
import { createTodo, readTodo, updateTodo } from "../controllers/todoControllers.js";

export const todosRouter = Router();

todosRouter.post('/todo', createTodo);
todosRouter.get('/todo/', readTodo);
todosRouter.patch('/todo/:id', updateTodo)