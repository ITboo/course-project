import { initTRPC } from "@trpc/server";
import { generateTemplates } from "./data/mock";
import {z} from 'zod'

const templates = generateTemplates(9);

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getTemplates: trpc.procedure.query(() => {
    return { templates };
  }),
  getTemplate: trpc.procedure.input(z.object({
    title: z.string()
  })).query(({input})=>{
    const template = templates.find((template)=>template.title===input.title)
    if(!template) throw new Error(`${input.title} not found`)
    return {template}
  })
});

export type TrpcRouter = typeof trpcRouter;
