import { prisma } from "../prisma/client";

export async function getThreadsByUser(
  userId: number,
  offset: number,
  limit: number
) {
  const threads = await prisma.thread.findMany({
    where: {
      userId: userId,
    },
    skip: offset,
    take: limit,
    orderBy: { created_at: "desc" },
    include: {
      user: true,
      likes: true,
    },
  });

  return threads.map((thread) => {
    const likeCount = thread.likes.length;
    const isLiked = thread.likes.some((like) => like.user_id === userId);

    return {
      ...thread,
      likeCount,
      isLiked,
    };
  });
}

export async function getUserMediaThreads(
  userId: number,
  offset: number,
  limit: number
) {
  const threads = await prisma.thread.findMany({
    where: {
      userId: userId,
      NOT: { image: null }, // hanya thread dengan gambar
    },
    skip: offset,
    take: limit,
    orderBy: { created_at: "desc" },
    include: {
      user: true,
      likes: true,
    },
  });

  return threads.map((thread) => {
    const likeCount = thread.likes.length;
    const isLiked = thread.likes.some((like) => like.user_id === userId);

    return {
      ...thread,
      likeCount,
      isLiked,
    };
  });
}

export const editUser = async (
  userId: number,
  data: {
    full_name?: string;
    username?: string;
    photo_profile?: string;
    background?: string;
    bio?: string;
  }
) => {
  // Cek apakah username ingin diubah dan tidak kosong
  if (data.username) {
    const existingUser = await prisma.user.findFirst({
      where: {
        username: data.username,
        NOT: { id: userId }, // exclude diri sendiri
      },
    });

    if (existingUser) {
      throw new Error("Username already taken");
    }
  }

  // Lanjut update
  return await prisma.user.update({
    where: { id: userId },
    data,
  });
};
