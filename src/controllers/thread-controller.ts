import { Request, Response } from "express";
import { createThread, getAllThreads } from "../services/thread-service";
import redisClient from "../redis/redisClient";
import { prisma } from "../prisma/client";

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

    const threadWithUser = await prisma.thread.findFirst({
      where: { id: newThread.id },
      include: {
        user: {
          select: {
            id: true,
            full_name: true,
            username: true,
            photo_profile: true,
          },
        },
      },
    });

    // ⏺️ Simpan ke Redis
    if (threadWithUser) {
      await redisClient.lPush("latest_threads", JSON.stringify(threadWithUser));
      await redisClient.lTrim("latest_threads", 0, 49); // simpan max 50 thread
    }

    const io = req.app.locals.io;
    io.emit("new-thread", {
      id: threadWithUser?.id,
      user_id: threadWithUser?.id,
      content: threadWithUser?.content,
      image_url: threadWithUser?.image,
      timestamp: threadWithUser?.created_at,
      user: threadWithUser?.user,
    });

    return res.status(201).json({
      code: 200,
      status: "success",
      message: "Thread berhasil diposting.",
      data: {
        tweet: {
          id: threadWithUser?.id,
          user_id: threadWithUser?.id,
          content: threadWithUser?.content,
          image_url: threadWithUser?.image,
          timestamp: threadWithUser?.created_at,
          user: threadWithUser?.user,
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

// controller.ts
export async function handleGetAllThreads(req: Request, res: Response) {
  try {
    const offset = parseInt(req.query.offset as string) || 0;
    const limit = parseInt(req.query.limit as string) || 10;
    const userId = req.session.user?.id;

    const cacheKey = `threads:offset=${offset}:limit=${limit}:user=${
      userId ?? "guest"
    }`;

    // 🔍 Cek cache Redis
    const cached = await redisClient.get(cacheKey);
    if (cached) {
      return res.status(200).json({
        code: 200,
        status: "success (cache)",
        message: "Berhasil mengambil thread dari cache.",
        data: {
          tweet: JSON.parse(cached),
        },
      });
    }

    // 🚀 Ambil dari DB kalau belum ada di cache
    const threads = await getAllThreads(offset, limit, userId);

    const formatted = threads.map((thread) => {
      if (!thread.user) throw new Error("Thread tidak memiliki user.");
      return {
        id: thread.id,
        user_id: thread.user.id,
        content: thread.content,
        image_url: thread.image ?? null,
        number_of_replies: thread.number_of_replies ?? null,
        like_count: thread.likeCount,
        is_liked: thread.isLiked,
        timestamp: thread.created_at,
        user: {
          id: thread.user.id,
          username: thread.user.username,
          full_name: thread.user.full_name,
          photo_profile: thread.user.photo_profile,
        },
      };
    });

    await redisClient.set(cacheKey, JSON.stringify(formatted), {
      EX: 60,
    });
    console.log("💾 Data thread disimpan di Redis dengan key:", cacheKey);
    console.log("Apakah data dari DB berhasil diambil?", threads.length);
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "Berhasil mengambil thread.",
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
