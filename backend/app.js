import express from "express";
import authRouter from "./routes/AuthRouter.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.get("/api/status", (req, res) => {
  res.status(200).json({ status: "OK" });
});
export default app;
