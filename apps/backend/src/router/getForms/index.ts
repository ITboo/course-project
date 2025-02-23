import { forms } from "../../lib/forms";
import { trpc } from "../../lib/trpc";

/*export const getFormsTRPCRoute = trpc.procedure.query(async ({ ctx }) => {
  const forms = await ctx.prisma.form.findMany();
  return { forms };
});*/
export const getFormsTRPCRoute = trpc.procedure.query( () => {
  return { forms };
})