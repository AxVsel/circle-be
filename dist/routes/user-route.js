"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user-controller");
const auth_1 = require("../middlewares/auth");
const multer_user_1 = require("../utils/multer-user");
const router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoint untuk mengelola data profil user
 */
/**
 * @swagger
 * /users/user/{id}:
 *   put:
 *     summary: Update profil user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID user yang ingin diupdate
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               full_name:
 *                 type: string
 *                 example: John Doe
 *               username:
 *                 type: string
 *                 example: johndoe
 *               bio:
 *                 type: string
 *                 example: Saya seorang penjelajah coding.
 *               photo_profile:
 *                 type: string
 *                 format: binary
 *               background:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Profil berhasil diperbarui
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Profile updated successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     full_name:
 *                       type: string
 *                     username:
 *                       type: string
 *                     photo_profile:
 *                       type: string
 *                     background:
 *                       type: string
 *                     bio:
 *                       type: string
 *       401:
 *         description: Tidak diotorisasi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized
 *       500:
 *         description: Gagal memperbarui profil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Failed to update profile
 *                 error:
 *                   type: string
 */
router.put("/user/:id", auth_1.requireAuth, multer_user_1.uploadUser.fields([
    { name: "photo_profile", maxCount: 1 },
    { name: "background", maxCount: 1 },
]), user_controller_1.updateUserProfile);
exports.default = router;
