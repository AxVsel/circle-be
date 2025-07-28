// routes/like.routes.ts
import { Router } from "express";
import {
  likeThread,
  likeReply,
  getThreadLikes,
  getReplyLikes,
} from "../controllers/like";
import { requireAuth } from "../middlewares/auth"; // jika ada auth

const router = Router();

// Thread Likes
router.post("/threads/:threadId", requireAuth, likeThread);
router.get("/threads/:threadId", requireAuth, getThreadLikes);

// Reply Likes
router.post("/replies/:replyId", requireAuth, likeReply);
router.get("/replies/:replyId", requireAuth, getReplyLikes);

export default router;
