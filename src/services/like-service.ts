// // services/like.service.ts
import { prisma } from "../prisma/client";

// Like/unlike thread
export async function toggleThreadLike(userId: number, threadId: number) {
  if (!threadId) throw new Error("threadId is required");

  const existing = await prisma.like.findFirst({
    where: { user_id: userId, thread_id: threadId },
  });

  if (existing) {
    await prisma.like.delete({ where: { id: existing.id } });
    return { liked: false };
  }

  await prisma.like.create({
    data: {
      user_id: userId,
      thread_id: threadId,
    },
  });

  return { liked: true };
}

// Like/unlike reply
export async function toggleReplyLike(userId: number, replyId: number) {
  if (!replyId) throw new Error("replyId is required");

  const existing = await prisma.like.findFirst({
    where: { user_id: userId, reply_id: replyId },
  });

  if (existing) {
    await prisma.like.delete({ where: { id: existing.id } });
    return { liked: false };
  }

  await prisma.like.create({
    data: {
      user_id: userId,
      reply_id: replyId,
    },
  });

  return { liked: true };
}

// Get like count for thread
export async function getThreadLikeCount(threadId: number) {
  const count = await prisma.like.count({ where: { thread_id: threadId } });
  return count;
}

// Get like count for reply
export async function getReplyLikeCount(replyId: number) {
  const count = await prisma.like.count({ where: { reply_id: replyId } });
  return count;
}
