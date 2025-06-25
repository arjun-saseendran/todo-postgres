import { db } from "../db/dbConnection";
import { todos } from "../schemas/todoSchema";

export const createTodo = async (req, res) => {
  try {
    const todo = {
      title: req.body.title,
    };

    await db.insert(todos).values({ todo });

    if(!todo.title){
        return res.status(400).json({message: 'Title filed is empty!'})
    }
    res.status(201).json({message: 'Todo created successfully.', todo})
  } catch (error) {}
};
