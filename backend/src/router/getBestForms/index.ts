import { forms } from "../../lib/forms";
import { trpc } from "../../lib/trpc";

export const getBestFormsTRPCRoute = trpc.procedure.query( () => {
    const sortedForms = forms.sort((a, b) => b.filled_times - a.filled_times);
    return sortedForms.slice(0, 5);
})