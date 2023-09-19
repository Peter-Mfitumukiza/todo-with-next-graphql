CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text,
	"complete" boolean DEFAULT false,
	"user_if" uuid,
	"created_at" date DEFAULT 'now()'
);
