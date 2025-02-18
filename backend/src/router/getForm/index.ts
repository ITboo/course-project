import { z } from "zod";
import { trpc } from "../../lib/trpc";

export const getFormTRPCRoute = trpc.procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(async({ ctx, input }) => {
    const form = await ctx.prisma.form.findUnique({
      where: {
        id: input.id,
      },
    });
    if (!form) throw new Error(`${input.id} not found`);
    return { form };
  });
