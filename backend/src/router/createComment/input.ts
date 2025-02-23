import { z } from "zod";

export const zCreateCommentTRPCInput = z.object({
    id: z.string().default(crypto.randomUUID()),
    author_id: z.string(),
    text: z.string(),
    created_at: z.string().default(new Date().toISOString()),
    formId: z.string()
  });