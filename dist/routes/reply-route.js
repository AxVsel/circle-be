"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reply_controller_1 = require("../controllers/reply-controller");
const auth_1 = require("../middlewares/auth");
const multer_reply_1 = require("../utils/multer-reply");
const router = express_1.default.Router();
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
router.post("/threads/:threadId/replies", auth_1.requireAuth, multer_reply_1.uploadReply.single("image"), reply_controller_1.handleCreateReply);
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
router.get("/threads/:threadId/replies", auth_1.requireAuth, reply_controller_1.handleGetReplies);
exports.default = router;
