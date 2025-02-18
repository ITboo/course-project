import { z } from "zod";

import { trpc } from "../../lib/trpc"
import { forms } from "../../lib/forms";

export const getFormTRPCRoute = trpc.procedure.input(z.object({
  title: z.string()
})).query(({input})=>{
  const form = forms.find((form)=>form.title===input.title)
  if(!form) throw new Error(`${input.title} not found`)
  return {form}
})