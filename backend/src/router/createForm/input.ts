import { z } from "zod";

// Схема для текстового поля
const textFieldSchema = z.object({
  id: z.string(),
  type: z.literal('text'), // Тип "text"
  label: z.string(),
  placeholder: z.string(), // placeholder не обязателен
});

// Схема для многострочного текстового поля
const textareaFieldSchema = z.object({
  id: z.string(),
  type: z.literal('textarea'), // Тип "textarea"
  label: z.string(),
  placeholder: z.string(), // placeholder не обязателен
});

// Схема для радио-поля
const radioFieldSchema = z.object({
  id: z.string(),
  type: z.literal('radio'), // Тип "radio"
  label: z.string(),
  options: z.array(z.string()), // options обязателен для радио-полей
});

// Схема для чекбокса
const checkboxFieldSchema = z.object({
  id: z.string(),
  type: z.literal('checkbox'), // Тип "checkbox"
  label: z.string(),
  options: z.array(z.string()), // options обязателен для чекбоксов
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
  id: z.string(),
  title: z.string(),
  description: z.string(),
  author_id: z.string(),
  img: z.string(),
  likes: z.number(),
  is_private: z.boolean(),
  theme: z.string(),
  fields: z.array(fieldSchema)
});


export interface Form {
  status: "active" | "blocked";
  comments: [];
  created_at: Date;
}
