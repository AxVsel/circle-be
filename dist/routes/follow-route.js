"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/like.routes.ts
const express_1 = require("express");
const follow_controller_1 = require("../controllers/follow-controller");
const auth_1 = require("../middlewares/auth"); // jika ada auth
const router = (0, express_1.Router)();
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
router.post("/follow", auth_1.requireAuth, follow_controller_1.follow);
router.post("/unfollow", auth_1.requireAuth, follow_controller_1.unfollow);
router.get("/users/follow-data", auth_1.requireAuth, follow_controller_1.getAllUsersWithFollows);
router.get("/followers/:userId", auth_1.requireAuth, follow_controller_1.followers);
router.get("/followings/:userId", auth_1.requireAuth, follow_controller_1.followings);
router.get("/follow/counts/:userId", auth_1.requireAuth, follow_controller_1.followCounts);
router.get("/is-following/:userId", auth_1.requireAuth, follow_controller_1.checkFollowing);
exports.default = router;
