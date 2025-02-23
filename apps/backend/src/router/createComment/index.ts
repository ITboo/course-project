import { forms } from "../../lib/forms";
import { trpc } from "../../lib/trpc";
import { zCreateCommentTRPCInput } from "./input";

export const getCreateCommentTRPCRoute = trpc.procedure
.input(zCreateCommentTRPCInput)
.mutation(({ input }) => {
    const form = forms.find((form) => form.id === input.formId);
    if (!form) {
      throw new Error('Форма не найдена');
    }
  form.comments.unshift(input);
  return { comments: input };
});
