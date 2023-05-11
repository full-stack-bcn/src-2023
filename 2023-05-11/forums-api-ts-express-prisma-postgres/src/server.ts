import express from "express";
import { ErrorRequestHandler } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import forumsRouter from "./forums.js";
import { defaultErrorHandler } from "./utils.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/forums", forumsRouter);

/*
// Este no mata el servidor porque Express coge nuestra excepción
// (esté debajo nuestro en la pila)
app.get("/err1", (req, res) => {
  throw new Error("Error 1 que te crió!");
});

// Esto mata el servidor (porque no hay nadie debajo nuestro en la pila)
app.get("/err2", async (req, res) => {
  throw new Error("Error 2 que lo flipas");
})
*/

app.get("/hola/:n", async (req, res, next) => {
  const { n } = req.params;
  if (n === "42") {
    res.status(200).json({ hola: true });
  } else {
    next("error 42");
  }
});

app.use(((err, req, res, next) => {
  console.error("Soy un intermediario ", err);
  next(err);
}) as ErrorRequestHandler);

app.use(defaultErrorHandler);

const { SERVER_PORT } = process.env;
app.listen(SERVER_PORT, () => {
  console.log(`Forum API listening on :${SERVER_PORT}`);
});
