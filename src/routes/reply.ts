import express from "express";
import { handleCreateReply, handleGetReplies } from "../controllers/reply";
import { requireAuth } from "../middlewares/auth";
import { uploadReply } from "../utils/multer-reply";
const router = express.Router();

router.post(
  "/threads/:threadId/replies",
  requireAuth,
  uploadReply.single("image"),
  handleCreateReply
);

router.get("/threads/:threadId/replies", requireAuth, handleGetReplies);

export default router;
