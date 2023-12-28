require('dotenv').config();
import express, { Express, Request, Response } from "express";
import config from 'config';
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";
import router from "./routes"

const app: Express = express();
app.use(express.json());

app.use(router)

const port = config.get('port');

app.get("/", (req: Request, res:  Response) => {
  res.send("Express + TypeScript Server");
});


// connect mongoose ?
app.listen(port, () => {
  log.info(`[server]: Server is running at ${port}`)

  connectToDb();
});
