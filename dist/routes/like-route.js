import { Router } from "express";
import { likeThread, likeReply, getThreadLikes, getReplyLikes, } from "../controllers/like-controller";
import { requireAuth } from "../middlewares/auth";
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Like
 *   description: Endpoint untuk menyukai thread atau balasan (reply)
 */
/**
 * @swagger
 * /likes/threads/{threadId}:
 *   post:
 *     summary: Toggle like/unlike untuk thread
 *     tags: [Like]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: threadId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID dari thread yang ingin dilike/unlike
 *     responses:
 *       200:
 *         description: Berhasil mengubah status like
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 liked:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       400:
 *         description: ID tidak valid
 *       401:
 *         description: Unauthorized
 */
router.post("/threads/:threadId", requireAuth, likeThread);
/**
 * @swagger
 * /likes/threads/{threadId}:
 *   get:
 *     summary: Ambil jumlah like untuk sebuah thread
 *     tags: [Like]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: threadId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID dari thread
 *     responses:
 *       200:
 *         description: Berhasil mengambil jumlah like
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *       400:
 *         description: ID tidak valid
 *       401:
 *         description: Unauthorized
 */
router.get("/threads/:threadId", requireAuth, getThreadLikes);
/**
 * @swagger
 * /likes/replies/{replyId}:
 *   post:
 *     summary: Toggle like/unlike untuk balasan (reply)
 *     tags: [Like]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: replyId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID dari reply yang ingin dilike/unlike
 *     responses:
 *       200:
 *         description: Berhasil mengubah status like
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 liked:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       400:
 *         description: ID tidak valid
 *       401:
 *         description: Unauthorized
 */
router.post("/replies/:replyId", requireAuth, likeReply);
/**
 * @swagger
 * /likes/replies/{replyId}:
 *   get:
 *     summary: Ambil jumlah like untuk sebuah reply
 *     tags: [Like]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: replyId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID dari reply
 *     responses:
 *       200:
 *         description: Berhasil mengambil jumlah like
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *       400:
 *         description: ID tidak valid
 *       401:
 *         description: Unauthorized
 */
router.get("/replies/:replyId", requireAuth, getReplyLikes);
export default router;
