import express from "express";
import { signup } from "../Controllers/AuthController.js";
const router = express.Router();

router.post("/login", (req, res) => {
  res.status(200).json({ message: "Login successful" });
});
router.post("/signup", signup);

export default router;
