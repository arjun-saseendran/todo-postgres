import { Client } from "pg";
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(client);

export const dbConnect = async () => {
  try {
    await client.connect();
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Failed to connect database! ", error);
    process.exit(1);
  }
};
