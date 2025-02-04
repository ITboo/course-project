import express from "express";
import cors from "cors";

const PORT = 8080;
const app = express();

app.use(cors());
app.get("/ping", (req, res) => {
  res.send("pong");
});
app.listen(PORT, () =>
  console.info(`Listening on http://localhost:${PORT}/`)
);
