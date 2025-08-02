import { prisma } from "../prisma/client";

export async function createReply(data: {
  user_id: number;
  thread_id: number;
  content: string;
  image?: string;
}) {
  // Validasi thread_id jika perlu
  const thread = await prisma.thread.findUnique({
    where: { id: data.thread_id },
    select: { id: true },
  });

  if (!thread) {
    throw new Error("thread_id tidak valid");
  }

  // Transaksi: buat reply + update jumlah reply
  const [reply] = await prisma.$transaction([
    prisma.reply.create({
      data: {
        user_id: data.user_id,
        thread_id: data.thread_id,
        content: data.content,
        image: data.image,
        created_at: new Date(),
      },
    }),
    prisma.thread.update({
      where: { id: data.thread_id },
      data: {
        number_of_replies: {
          increment: 1,
        },
      },
    }),
  ]);

  return reply;
}

export async function getRepliesByThread(threadId: number) {
  const replies = await prisma.reply.findMany({
    where: { thread_id: threadId },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          photo_profile: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  return replies;
}
