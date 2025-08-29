import { serial, text, pgTable, timestamp } from 'drizzle-orm/pg-core';

export const textContentsTable = pgTable('text_contents', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  title: text('title'), // Nullable by default, matches Zod schema
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// TypeScript type for the table schema
export type TextContent = typeof textContentsTable.$inferSelect; // For SELECT operations
export type NewTextContent = typeof textContentsTable.$inferInsert; // For INSERT operations

// Important: Export all tables and relations for proper query building
export const tables = { textContents: textContentsTable };