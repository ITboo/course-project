import { z } from "zod";

// Схема для текстового поля
const textFieldSchema = z.object({
  id: z.string(),
  type: z.literal('text'),
  label: z.string(),
  placeholder: z.string().default(''),
});

// Схема для многострочного текстового поля
const textareaFieldSchema = z.object({
  id: z.string(),
  type: z.literal('textarea'),
  label: z.string(),
  placeholder: z.string().default(''),
});

// Схема для радио-поля
const radioFieldSchema = z.object({
  id: z.string(),
  type: z.literal('radio'),
  label: z.string(),
  options: z.array(z.string()).min(1),
});

// Схема для чекбокса
const checkboxFieldSchema = z.object({
  id: z.string(),
  type: z.literal('checkbox'),
  label: z.string(),
  options: z.array(z.string()).min(1),
});

export const commentSchema = z.object({
  id: z.string(),
  author_id: z.string(),
  text: z.string(),
  created_at: z.string(),
});

// Объединяем схемы для полей
export const fieldSchema = z.discriminatedUnion('type', [
  textFieldSchema,
  textareaFieldSchema,
  radioFieldSchema,
  checkboxFieldSchema,
]);

export type Field = z.infer<typeof fieldSchema>;

export const zCreateFormTRPCInput = z.object({
  id: z.string().default(crypto.randomUUID()),
  title: z.string(),
  description: z.string(),
  author_id: z.string(),
  created_at: z.string().default(new Date().toISOString()),
  status: z.enum(["active", "blocked"]).default("active"),
  img: z.string().default(''),
  likes: z.number().default(0),
  filled_times: z.number().default(0),
  is_private: z.boolean().default(false),
  theme: z.string(),
  fields: z.array(fieldSchema).min(1, 'Добавьте хотя бы одно поле'),
  comments: z.array(commentSchema).default([]),
});