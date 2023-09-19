import { pgTable, serial, text, boolean, date, uuid } from "drizzle-orm/pg-core"

export const todos = pgTable('todos', {
    id: serial('id').primaryKey(),
    content: text('content'),
    complete: boolean('complete').default(false),
    userId: uuid("user_if"),
    createdAt: date('created_at').default('CURRENT_TIMESTAMP')
})