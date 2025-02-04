import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { trpcRouter } from "./trpc";

const PORT = 8080;
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
app.listen(PORT, () => console.info(`Listening on http://localhost:${PORT}/`));
