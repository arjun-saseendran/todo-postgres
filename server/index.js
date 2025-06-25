import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./db/dbConnection.js";
import { todosRouter } from "./routes/todoRoutes.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/", todosRouter);

await dbConnect();

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
