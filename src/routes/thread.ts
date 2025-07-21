import express from "express";
import { handleCreateThread, handleGetAllThreads } from "../controllers/thread";
import { requireAuth } from "../middlewares/auth";
import { uploadThread } from "../utils/multer";
const router = express.Router();

router.post(
  "/thread",
  requireAuth,
  uploadThread.single("image"),
  handleCreateThread
);

router.get("/thread", requireAuth, handleGetAllThreads);

export default router;
