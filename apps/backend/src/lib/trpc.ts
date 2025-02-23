import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { TrpcRouter } from "../router";
import { type Express } from 'express'

export const trpc = initTRPC.create();

export const applyTrpcToExpressApp = async (app: Express, trpcRouter: TrpcRouter) => {
    app.use(
      '/forms',
      trpcExpress.createExpressMiddleware({
        router: trpcRouter,
      })
    )
}