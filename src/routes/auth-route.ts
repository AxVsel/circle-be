import express from "express";
import {
  handleRegister,
  handleLogin,
  handleLogout,
} from "../controllers/auth-controller";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints untuk autentikasi pengguna
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Register pengguna baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - full_name
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               full_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Berhasil registrasi
 *       400:
 *         description: Validasi gagal
 *       500:
 *         description: Server error
 */
router.post("/register", handleRegister);
/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Login pengguna
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - identifier
 *               - password
 *             properties:
 *               identifier:
 *                 type: string
 *                 description: Bisa username atau email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Berhasil login
 *       401:
 *         description: Gagal login
 *       500:
 *         description: Server error
 */
router.post("/login", handleLogin);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     tags: [Auth]
 *     summary: Logout pengguna
 *     responses:
 *       200:
 *         description: Berhasil logout
 *       500:
 *         description: Server error
 */
router.post("/logout", handleLogout);

export default router;
