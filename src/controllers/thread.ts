import { Request, Response } from "express";
import { createThread, getAllThreads } from "../services/thread";

export async function handleCreateThread(req: Request, res: Response) {
  try {
    const { content } = req.body;
    const user = (req as any).user;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const imagePath = req.file?.filename;

    const newThread = await createThread({
      content,
      image: imagePath,
      userId: user.id,
    });

    return res.status(201).json({
      code: 200,
      status: "success",
      message: "Thread berhasil diposting.",
      data: {
        tweet: {
          id: newThread.id,
          user_id: newThread.userId,
          content: newThread.content,
          image_url: newThread.image,
          timestamp: newThread.created_at,
        },
      },
    });
  } catch (err) {
    console.error("❌ Error Thread:", err);
    return res
      .status(500)
      .json({ message: "Server error saat membuat thread" });
  }
}

export async function handleGetAllThreads(req: Request, res: Response) {
  try {
    const threads = await getAllThreads();

    const formatted = threads.map((thread) => {
      if (!thread.user) {
        throw new Error("Thread tidak memiliki user.");
      }

      return {
        id: thread.id,
        user_id: thread.user.id,
        content: thread.content,
        image_url: thread.image ?? null,
        timestamp: thread.created_at,
      };
    });

    return res.status(200).json({
      code: 200,
      status: "success",
      message: "Berhasil mengambil semua thread.",
      data: {
        tweet: formatted,
      },
    });
  } catch (err) {
    console.error("❌ Error getAllThreads:", err);
    return res.status(500).json({
      code: 500,
      status: "error",
      message: "Terjadi kesalahan saat mengambil thread.",
    });
  }
}
