import { eq } from "drizzle-orm";
import { db } from "../db/dbConnection.js";
import { todos } from "../schemas/todoSchema.js";

// Create todo.
export const createTodo = async (req, res) => {
  try {
    const todo = {
      title: req.body.title,
    };

    if (!todo.title) {
      return res.status(400).json({ message: "Title filed is empty!" });
    }

    await db.insert(todos).values(todo);

    res.status(201).json({ message: "Todo created successfully.", todo });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server error!" });
  }
};

// Read todo.
export const readTodo = async (req, res) => {
  try {
    const todosData = await db.select().from(todos);
    if (!todosData) {
      return res.status(404).json({ message: "No todos found!" });
    }
    res.status(200).json({ message: "Todos fetched successfully.", todosData });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Sever error!" });
  }
};

// Update todo.
export const updateTodo = async (req, res) => {
  try {
    const updateId = req.params.id;
    if (!updateId) {
      return res.status(400).json({ message: "Id is not provided!" });
    }
    const updatedTodo = await db
      .update(todos)
      .set({ isComplete: true })
      .where(eq(todos.id, updateId))
      .returning();
    res
      .status(202)
      .json({ message: "Todo updated successfully.", updatedTodo });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server error!" });
  }
};

// Delete todo.
export const deleteTodo = async (req, res) => {
  try {
    const deleteTodoId = req.params.id;

    if (!deleteTodoId) {
      return res.status(400).json({ message: "Id is not provided!" });
    }
    const deletedTodo = await db
      .delete(todos)
      .where(eq(todos.id, deleteTodoId))
      .returning();
    res.status(200).json({
      message: "Todo deleted successfully.",
      deletedTodo,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error!" });
  }
};
