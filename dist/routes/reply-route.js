import express from "express";
import { handleCreateReply, handleGetReplies, } from "../controllers/reply-controller";
import { requireAuth } from "../middlewares/auth";
import { uploadReply } from "../utils/multer-reply";
const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Replies
 *   description: API endpoints untuk reply pada thread
 */
/**
 * @swagger
 * /reply/threads/{threadId}/replies:
 *   post:
 *     summary: Buat reply baru pada thread
 *     tags: [Replies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: threadId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID dari thread yang ingin dibalas
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: Ini adalah balasan saya.
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Reply berhasil dibuat
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 reply:
 *                   type: object
 *       400:
 *         description: Permintaan tidak valid
 *       401:
 *         description: Tidak diotorisasi (belum login)
 *       500:
 *         description: Gagal membuat reply
 */
router.post("/threads/:threadId/replies", requireAuth, uploadReply.single("image"), handleCreateReply);
/**
 * @swagger
 * /reply/threads/{threadId}/replies:
 *   get:
 *     summary: Ambil daftar replies berdasarkan thread ID
 *     tags: [Replies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: threadId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID thread yang ingin diambil reply-nya
 *     responses:
 *       200:
 *         description: Daftar replies berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 replies:
 *                   type: array
 *                   items:
 *                     type: object
 *       401:
 *         description: Tidak diotorisasi (belum login)
 *       500:
 *         description: Gagal mengambil replies
 */
router.get("/threads/:threadId/replies", requireAuth, handleGetReplies);
export default router;
