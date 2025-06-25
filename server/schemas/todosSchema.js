import { pgTable, varchar, integer, boolean } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 30 }).notNull(),
  isComplete: boolean().default(false),
});
