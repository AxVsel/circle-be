import express from "express";
import { handleCreateThread, handleGetAllThreads, } from "../controllers/thread-controller";
import { requireAuth } from "../middlewares/auth";
import { uploadThread } from "../utils/multer-thread";
const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Thread
 *   description: Endpoint untuk membuat dan mengambil thread
 */
/**
 * @swagger
 * /thread/threads:
 *   post:
 *     summary: Buat thread baru
 *     tags: [Thread]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *                 example: "Ini thread baru!"
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Thread berhasil dibuat
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: number
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     tweet:
 *                       type: object
 *       401:
 *         description: Unauthorized
 */
router.post("/threads", requireAuth, uploadThread.single("image"), handleCreateThread);
/**
 * @swagger
 * /thread/threads:
 *   get:
 *     summary: Ambil semua thread dengan pagination
 *     tags: [Thread]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - name: offset
 *         in: query
 *         description: Offset data
 *         required: false
 *         schema:
 *           type: integer
 *       - name: limit
 *         in: query
 *         description: Jumlah data
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Berhasil mengambil thread
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: number
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     tweet:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: number
 *                           user_id:
 *                             type: number
 *                           content:
 *                             type: string
 *                           image_url:
 *                             type: string
 *                           number_of_replies:
 *                             type: number
 *                           like_count:
 *                             type: number
 *                           is_liked:
 *                             type: boolean
 *                           timestamp:
 *                             type: string
 *                             format: date-time
 *                           user:
 *                             type: object
 *                             properties:
 *                               id:
 *                                 type: number
 *                               username:
 *                                 type: string
 *                               full_name:
 *                                 type: string
 *                               photo_profile:
 *                                 type: string
 *       401:
 *         description: Unauthorized
 */
router.get("/threads", requireAuth, handleGetAllThreads);
export default router;
