import { initTRPC } from "@trpc/server";
import { generateTemplates } from "./data/mock";

const templates = generateTemplates(20);

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getTemplates: trpc.procedure.query(() => {
    return { templates };
  }),
});

export type TrpcRouter = typeof trpcRouter;
