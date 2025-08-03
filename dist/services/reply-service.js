"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReply = createReply;
exports.getRepliesByThread = getRepliesByThread;
const client_1 = require("../prisma/client");
async function createReply(data) {
    // Validasi thread_id jika perlu
    const thread = await client_1.prisma.thread.findUnique({
        where: { id: data.thread_id },
        select: { id: true },
    });
    if (!thread) {
        throw new Error("thread_id tidak valid");
    }
    // Transaksi: buat reply + update jumlah reply
    const [reply] = await client_1.prisma.$transaction([
        client_1.prisma.reply.create({
            data: {
                user_id: data.user_id,
                thread_id: data.thread_id,
                content: data.content,
                image: data.image,
                created_at: new Date(),
            },
        }),
        client_1.prisma.thread.update({
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
async function getRepliesByThread(threadId) {
    const replies = await client_1.prisma.reply.findMany({
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
