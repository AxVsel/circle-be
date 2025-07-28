// controllers/like.controller.ts
import { Request, Response } from "express";
import {
  toggleThreadLike,
  toggleReplyLike,
  getThreadLikeCount,
  getReplyLikeCount,
} from "../services/like";

// Toggle like for thread
export async function likeThread(req: Request, res: Response) {
  const userId = req.session.user?.id;
  const threadId = Number(req.params.threadId);

  if (!userId) return res.status(401).json({ message: "Unauthorized" });
  if (Number.isNaN(threadId))
    return res.status(400).json({ message: "Invalid threadId" });

  const result = await toggleThreadLike(userId, threadId);
  res.json(result);
}

// Toggle like for reply
export async function likeReply(req: Request, res: Response) {
  const userId = req.session.user?.id;
  const replyId = Number(req.params.replyId);

  if (!userId) return res.status(401).json({ message: "Unauthorized" });
  if (Number.isNaN(replyId))
    return res.status(400).json({ message: "Invalid replyId" });

  const result = await toggleReplyLike(userId, replyId);
  res.json(result);
}

// Get thread like count
export async function getThreadLikes(req: Request, res: Response) {
  const threadId = Number(req.params.threadId);
  if (Number.isNaN(threadId))
    return res.status(400).json({ message: "Invalid threadId" });

  const count = await getThreadLikeCount(threadId);
  res.json({ count });
}

// Get reply like count
export async function getReplyLikes(req: Request, res: Response) {
  const replyId = Number(req.params.replyId);
  if (Number.isNaN(replyId))
    return res.status(400).json({ message: "Invalid replyId" });

  const count = await getReplyLikeCount(replyId);
  res.json({ count });
}
