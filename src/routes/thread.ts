import express from "express";
import { handleCreateThread, handleGetAllThreads } from "../controllers/thread";
import { requireAuth } from "../middlewares/auth";
import { uploadThread } from "../utils/multer-thread";
const router = express.Router();

router.post(
  "/threads",
  requireAuth,
  uploadThread.single("image"),
  handleCreateThread
);

router.get("/threads", requireAuth, handleGetAllThreads);

export default router;
