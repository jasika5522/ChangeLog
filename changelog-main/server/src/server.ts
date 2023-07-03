import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";

import { protect } from "./module/user";
import userRouter from "./routes/user";
import productRouter from "./routes/product";
import updateRouter from "./routes/update";
import featureRouter from "./routes/features";
dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  console.log("HELLO");
  res.status(200);
  res.json({ message: "HEllo" });
});

app.use("/api/user", userRouter);

app.use("/api/product", protect, productRouter);
app.use("/api/update", protect, updateRouter);
app.use("/api/feature", protect, featureRouter);

export default app;
