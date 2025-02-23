import { forms } from "../../lib/forms";
import { trpc } from "../../lib/trpc";
import { zCreateFormTRPCInput } from "./input";

/*export const getCreateFormTRPCRoute = trpc.procedure
  .input(zCreateFormTRPCInput)
  .mutation(async ({ ctx, input }) => {
    const exForm = await ctx.prisma.form.findUnique({
      where: {
        id: input.id,
      },
    });
    if (exForm) {
      throw new Error("This form exists");
    }
    await ctx.prisma.form.create({
      data: {
        ...input,
        fields: {
          create: input.fields.map((field) => {
            const baseField = {
              type: field.type,
              label: field.label,
              options: field.type === "radio" || field.type === "checkbox" ? field.options : [],
            };

            if (field.type === "text" || field.type === "textarea") {
              return {
                ...baseField,
                placeholder: field.placeholder || null,
              };
            }

            return baseField;
          }),
        },
        comments: {
          create: input.comments?.map((comment) => ({
            author_id: comment.author_id,
            text: comment.text,
            created_at: comment.created_at,
          })),
        },
      },
    });
  });*/

  export const getCreateFormTRPCRoute = trpc.procedure
  .input(zCreateFormTRPCInput)
  .mutation(({ input }) => {
    forms.unshift(input);
    return { success: true, form: input };
  });
