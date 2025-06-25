import { pgTable, varchar, integer, boolean } from "pg";

export const todos = pgTable("todos", {
  id: integer().primaryKey().generateAlwaysAsIdentity(),
  todo: varchar({ length: 30 }).notNull(),
  isComplete: boolean().default(true),
});
