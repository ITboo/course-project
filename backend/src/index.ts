import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";

import { AppContext, createAppContext } from "./lib/ctx";
import { trpcRouter } from "./router";

const PORT = 8080;

void (async () => {
  let ctx: AppContext | null = null;

  try {
    ctx = createAppContext();
    const app = express();

    app.use(cors());
    app.get("/ping", (req, res) => {
      res.send("pong");
    });
    app.use(
      "/templates",
      trpcExpress.createExpressMiddleware({
        router: trpcRouter,
      })
    );
    app.listen(PORT, () =>
      console.info(`Listening on http://localhost:${PORT}/`)
    );
  } catch (error) {
    console.error(error);
    await ctx?.stop();
  }
})();
