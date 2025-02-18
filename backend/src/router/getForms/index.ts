import { trpc } from "../../lib/trpc";

export const getFormsTRPCRoute = trpc.procedure.query(async ({ ctx }) => {
  const forms = await ctx.prisma.form.findMany();
  return { forms };
});
