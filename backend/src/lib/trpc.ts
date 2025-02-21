import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { AppContext } from "./ctx";
import { TrpcRouter } from "../router";
import { type Express } from 'express'


export const trpc = initTRPC.context<AppContext>().create();

export const applyTrpcToExpressApp = async (app: Express, appContext: AppContext, trpcRouter: TrpcRouter) => {
    app.use(
      '/forms',
      trpcExpress.createExpressMiddleware({
        router: trpcRouter,
        createContext: ()=> appContext
      })
    )
}