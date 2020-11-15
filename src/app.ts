import express, { Application, json } from "express";
import morgan from "morgan";
import helmet from "helmet";
import router from "./router";

const app: Application = express();

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use("/home", router);
export default app;
