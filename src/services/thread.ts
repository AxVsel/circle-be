import { prisma } from "../prisma/client";

export async function createThread(data: {
  content: string;
  image?: string;
  userId: number;
}) {
  const thread = await prisma.thread.create({
    data: {
      content: data.content,
      image: data.image || null,
      created_by: data.userId,
      updated_by: data.userId,
      userId: data.userId,
    },
  });

  return thread;
}

export async function getAllThreads() {
  const threads = await prisma.thread.findMany({
    orderBy: {
      created_at: "desc",
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          full_name: true,
          photo_profile: true,
        },
      },
    },
  });

  return threads;
}
