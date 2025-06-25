import { Router } from "express";
import { createTodo, deleteTodo, readTodo, updateTodo } from "../controllers/todoControllers.js";

export const todosRouter = Router();

todosRouter.post('/todo', createTodo);
todosRouter.get('/todo/', readTodo);
todosRouter.patch('/todo/:id', updateTodo)
todosRouter.delete('/todo/:id', deleteTodo)