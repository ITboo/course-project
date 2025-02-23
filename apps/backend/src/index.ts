import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";

import { trpcRouter } from "./router";
import { applyTrpcToExpressApp } from "./lib/trpc";

const PORT = 8080;

void (async () => {
  try {
    const app = express();

    app.use(cors());
    app.get("/ping", (req, res) => {
      res.send("pong");
    });
    applyTrpcToExpressApp(app, trpcRouter)
    app.listen(PORT, () =>
      console.info(`Listening on http://localhost:${PORT}/`)
    );
  } catch (error) {
    console.error(error);
  }
})();
