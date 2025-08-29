import { z } from 'zod';

// Text content schema
export const textContentSchema = z.object({
  id: z.number(),
  content: z.string(),
  title: z.string().nullable(),
  created_at: z.coerce.date()
});

export type TextContent = z.infer<typeof textContentSchema>;

// Input schema for creating text content
export const createTextContentInputSchema = z.object({
  content: z.string().min(1, "Content cannot be empty"),
  title: z.string().nullable()
});

export type CreateTextContentInput = z.infer<typeof createTextContentInputSchema>;

// Random text response schema
export const randomTextResponseSchema = z.object({
  id: z.number(),
  content: z.string(),
  title: z.string().nullable(),
  created_at: z.coerce.date()
});

export type RandomTextResponse = z.infer<typeof randomTextResponseSchema>;