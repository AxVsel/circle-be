"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleThreadLike = toggleThreadLike;
exports.toggleReplyLike = toggleReplyLike;
exports.getThreadLikeCount = getThreadLikeCount;
exports.getReplyLikeCount = getReplyLikeCount;
// // services/like.service.ts
const client_1 = require("../prisma/client");
// Like/unlike thread
async function toggleThreadLike(userId, threadId) {
    if (!threadId)
        throw new Error("threadId is required");
    const existing = await client_1.prisma.like.findFirst({
        where: { user_id: userId, thread_id: threadId },
    });
    if (existing) {
        await client_1.prisma.like.delete({ where: { id: existing.id } });
        return { liked: false };
    }
    await client_1.prisma.like.create({
        data: {
            user_id: userId,
            thread_id: threadId,
        },
    });
    return { liked: true };
}
// Like/unlike reply
async function toggleReplyLike(userId, replyId) {
    if (!replyId)
        throw new Error("replyId is required");
    const existing = await client_1.prisma.like.findFirst({
        where: { user_id: userId, reply_id: replyId },
    });
    if (existing) {
        await client_1.prisma.like.delete({ where: { id: existing.id } });
        return { liked: false };
    }
    await client_1.prisma.like.create({
        data: {
            user_id: userId,
            reply_id: replyId,
        },
    });
    return { liked: true };
}
// Get like count for thread
async function getThreadLikeCount(threadId) {
    const count = await client_1.prisma.like.count({ where: { thread_id: threadId } });
    return count;
}
// Get like count for reply
async function getReplyLikeCount(replyId) {
    const count = await client_1.prisma.like.count({ where: { reply_id: replyId } });
    return count;
}
