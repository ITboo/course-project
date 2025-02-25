import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";

import { trpcRouter } from "./router";
import { applyTrpcToExpressApp } from "./lib/trpc";
import { logger } from "./lib/logger";
import { applyServeWebApp } from "./lib/serveWebApp";

const PORT = 8080;

void (async () => {
  try {
    const app = express();

    app.use(cors());
    app.get("/ping", (req, res) => {
      res.send("pong");
    });
    await applyTrpcToExpressApp(app, trpcRouter)
    await applyServeWebApp(app)
    app.listen(PORT, () =>
      logger.info(`Listening on http://localhost:${PORT}/`)
    );
  } catch (error) {
    logger.error(error);
  }
})();
