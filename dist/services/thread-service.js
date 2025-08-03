import { prisma } from "../prisma/client";
export async function createThread(data) {
    const thread = await prisma.thread.create({
        data: {
            content: data.content,
            image: data.image || null,
            userId: data.userId,
        },
    });
    return thread;
}
export async function getAllThreads(offset, limit, userId) {
    const threads = await prisma.thread.findMany({
        skip: offset,
        take: limit,
        orderBy: { created_at: "desc" },
        include: {
            user: true,
            likes: true, // <- agar bisa hitung jumlah like
        },
    });
    // hitung like + status like user
    return threads.map((thread) => {
        const likeCount = thread.likes.length;
        const isLiked = userId
            ? thread.likes.some((like) => like.user_id === userId)
            : false;
        return Object.assign(Object.assign({}, thread), { likeCount,
            isLiked });
    });
}
