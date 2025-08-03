// routes/like.routes.ts
import { Router } from "express";
import { follow, unfollow, followers, followings, followCounts, checkFollowing, getAllUsersWithFollows, } from "../controllers/follow-controller";
import { requireAuth } from "../middlewares/auth"; // jika ada auth
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Follow
 *   description: Endpoint untuk mengikuti dan berhenti mengikuti user
 */
/**
 * @swagger
 * /follows/follow:
 *   post:
 *     summary: Ikuti user lain
 *     tags: [Follow]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - following_id
 *             properties:
 *               following_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Berhasil mengikuti user
 *       400:
 *         description: Permintaan tidak valid
 *       401:
 *         description: Tidak diotorisasi
 */
/**
 * @swagger
 * /follows/unfollow:
 *   post:
 *     summary: Berhenti mengikuti user
 *     tags: [Follow]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - following_id
 *             properties:
 *               following_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Berhasil unfollow
 *       401:
 *         description: Tidak diotorisasi
 */
/**
 * @swagger
 * /follows/followers/{userId}:
 *   get:
 *     summary: Ambil daftar followers user
 *     tags: [Follow]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID user target
 *     responses:
 *       200:
 *         description: Berhasil mengambil followers
 *       401:
 *         description: Tidak diotorisasi
 */
/**
 * @swagger
 * /follows/followings/{userId}:
 *   get:
 *     summary: Ambil daftar following user
 *     tags: [Follow]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID user target
 *     responses:
 *       200:
 *         description: Berhasil mengambil followings
 *       401:
 *         description: Tidak diotorisasi
 */
/**
 * @swagger
 * /follows/follow/counts/{userId}:
 *   get:
 *     summary: Ambil jumlah followers dan followings
 *     tags: [Follow]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID user
 *     responses:
 *       200:
 *         description: Berhasil mengambil jumlah follow
 *       400:
 *         description: userId tidak valid
 *       401:
 *         description: Tidak diotorisasi
 *       500:
 *         description: Gagal mengambil data
 */
/**
 * @swagger
 * /follows/is-following/{userId}:
 *   get:
 *     summary: Cek apakah user yang login mengikuti user lain
 *     tags: [Follow]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID user yang dicek
 *     responses:
 *       200:
 *         description: Status follow berhasil dikembalikan
 *       401:
 *         description: Tidak diotorisasi
 */
/**
 * @swagger
 * /follows/users/follow-data:
 *   get:
 *     summary: Ambil semua user beserta data followers & followings
 *     tags: [Follow]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter pencarian username / nama
 *     responses:
 *       200:
 *         description: Berhasil mengambil data user dengan follow
 *       500:
 *         description: Gagal mengambil data
 */
router.post("/follow", requireAuth, follow);
router.post("/unfollow", requireAuth, unfollow);
router.get("/users/follow-data", requireAuth, getAllUsersWithFollows);
router.get("/followers/:userId", requireAuth, followers);
router.get("/followings/:userId", requireAuth, followings);
router.get("/follow/counts/:userId", requireAuth, followCounts);
router.get("/is-following/:userId", requireAuth, checkFollowing);
export default router;
