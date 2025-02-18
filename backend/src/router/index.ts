import { trpc } from "../lib/trpc";
import { getFormTRPCRoute } from "./getForm";
import { getFormsTRPCRoute } from "./getForms";
import { getCreateFormTRPCRoute } from "./createForm";


export const trpcRouter = trpc.router({
  getForms: getFormsTRPCRoute,
  getForm: getFormTRPCRoute,
  createForm: getCreateFormTRPCRoute,
});

export type TrpcRouter = typeof trpcRouter;
