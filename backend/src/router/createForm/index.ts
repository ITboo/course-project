import { trpc } from "../../lib/trpc";
import { zCreateFormTRPCInput } from "./input";
import { forms } from "../../lib/forms";

export const getCreateFormTRPCRoute = trpc.procedure
  .input(
    zCreateFormTRPCInput
  )
  .mutation(({ input }) => {
    forms.unshift(input);
    return true;
  });
