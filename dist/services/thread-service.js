"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThread = createThread;
exports.getAllThreads = getAllThreads;
const client_1 = require("../prisma/client");
async function createThread(data) {
    const thread = await client_1.prisma.thread.create({
        data: {
            content: data.content,
            image: data.image || null,
            userId: data.userId,
        },
    });
    return thread;
}
async function getAllThreads(offset, limit, userId) {
    const threads = await client_1.prisma.thread.findMany({
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
