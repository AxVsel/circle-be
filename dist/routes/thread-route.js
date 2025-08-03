"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const thread_controller_1 = require("../controllers/thread-controller");
const auth_1 = require("../middlewares/auth");
const multer_thread_1 = require("../utils/multer-thread");
const router = express_1.default.Router();
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
router.post("/threads", auth_1.requireAuth, multer_thread_1.uploadThread.single("image"), thread_controller_1.handleCreateThread);
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
router.get("/threads", auth_1.requireAuth, thread_controller_1.handleGetAllThreads);
exports.default = router;
