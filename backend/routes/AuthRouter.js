import express from "express";
import { signup, login } from "../Controllers/AuthController.js";
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

export default router;
