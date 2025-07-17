import express from "express";
import { handleRegister, handleLogin } from "../controllers/login-register";
const router = express.Router();

router.post("/register", handleRegister);
router.get("/login", handleLogin);

export default router;
