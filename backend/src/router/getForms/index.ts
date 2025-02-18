import { forms } from "../../lib/forms";
import { trpc } from "../../lib/trpc"

export const getFormsTRPCRoute = trpc.procedure.query(() => {
  return { forms };
})