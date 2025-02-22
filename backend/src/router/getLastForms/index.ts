import { forms } from "../../lib/forms";
import { trpc } from "../../lib/trpc";

export const getLastFormsTRPCRoute = trpc.procedure.query( () => {
    const lastForms = forms.slice(0, 8)
    return lastForms;
})