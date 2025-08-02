// controllers/replyController.ts
import { Request, Response } from "express";
import { createReply, getRepliesByThread } from "../services/reply-service";

export async function handleCreateReply(req: Request, res: Response) {
  const userId = req.session.user?.id;
  if (!userId) return res.status(401).json({ message: "Unauthorized" });

  const image = req.file?.filename;
  const { content } = req.body;
  const threadId = Number(req.params.threadId);

  if (!threadId || isNaN(threadId)) {
    return res.status(400).json({ message: "thread_id tidak valid" });
  }

  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  const reply = await createReply({
    user_id: userId,
    thread_id: threadId,
    content,
    image,
  });

  console.log("DATA TO CREATE:", {
    user_id: userId,
    thread_id: Number(threadId),
    content,
    image,
  });

  res.status(201).json({ message: "Reply created", reply });
}

export async function handleGetReplies(req: Request, res: Response) {
  try {
    const threadId = Number(req.params.threadId);
    const replies = await getRepliesByThread(threadId);
    res.json({ replies });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch replies" });
  }
}
