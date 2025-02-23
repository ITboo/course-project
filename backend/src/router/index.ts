import { trpc } from "../lib/trpc";
import { getFormTRPCRoute } from "./getForm";
import { getFormsTRPCRoute } from "./getForms";
import { getCreateFormTRPCRoute } from "./createForm";
import { getBestFormsTRPCRoute } from "./getBestForms";
import { getLastFormsTRPCRoute } from "./getLastForms";
import { getCreateCommentTRPCRoute } from "./createComment";

export const trpcRouter = trpc.router({
  getForms: getFormsTRPCRoute,
  getForm: getFormTRPCRoute,
  createForm: getCreateFormTRPCRoute,
  getBestForms: getBestFormsTRPCRoute,
  getLastForms: getLastFormsTRPCRoute,
  createComment: getCreateCommentTRPCRoute
});

export type TrpcRouter = typeof trpcRouter;
