import express, { Application, json } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import router from "./router";
import { productRouter } from "./router/productsRouter";
import authRouter from "./router/authRouter";
import { verifyToken } from "./middlewares/authVerify";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(cors());
app.use("/home", verifyToken, router);
app.use("/products", productRouter);
app.use("/auth", authRouter);
export default app;
