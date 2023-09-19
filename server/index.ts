import { eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { todos } from "@/db/schema";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";

const client = postgres(process.env.DB_URL as string);
const db = drizzle(client);

migrate(db, { migrationsFolder: "drizzle" });

export const appRouter = router({
  getTodos: publicProcedure.input(z.string()).query(async (opts) => {
    return await db
      .select()
      .from(todos)
      .where(eq(todos.userId, opts.input))
      .orderBy(todos.content);
  }),
  addTodo: publicProcedure
    .input(
      z.object({
        content: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async (opts) => {
      await db
        .insert(todos)
        .values({ content: opts.input.content, userId: opts.input.userId });
      return true;
    }),
  setComplete: publicProcedure
    .input(
      z.object({
        id: z.number(),
        complete: z.boolean(),
      })
    )
    .mutation(async (opts) => {
      await db
        .update(todos)
        .set({ complete: !opts.input.complete })
        .where(eq(todos.id, opts.input.id));
      return true;
    }),
  deleteTodo: publicProcedure.input(z.number()).mutation(async (opts) => {
    await db.delete(todos).where(eq(todos.id, opts.input));
    return true;
  }),
  deleteCompletedTodos: publicProcedure
    .input(z.string())
    .mutation(async (opts) => {
      await db
        .delete(todos)
        .where(
          sql`${todos.userId} = ${opts.input} AND ${todos.complete} = true`
        );
      return true;
    }),
});

export type AppRouter = typeof appRouter;
