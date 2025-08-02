"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleThreadLike = toggleThreadLike;
exports.toggleReplyLike = toggleReplyLike;
exports.getThreadLikeCount = getThreadLikeCount;
exports.getReplyLikeCount = getReplyLikeCount;
// // services/like.service.ts
const client_1 = require("../prisma/client");
// Like/unlike thread
function toggleThreadLike(userId, threadId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!threadId)
            throw new Error("threadId is required");
        const existing = yield client_1.prisma.like.findFirst({
            where: { user_id: userId, thread_id: threadId },
        });
        if (existing) {
            yield client_1.prisma.like.delete({ where: { id: existing.id } });
            return { liked: false };
        }
        yield client_1.prisma.like.create({
            data: {
                user_id: userId,
                thread_id: threadId,
            },
        });
        return { liked: true };
    });
}
// Like/unlike reply
function toggleReplyLike(userId, replyId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!replyId)
            throw new Error("replyId is required");
        const existing = yield client_1.prisma.like.findFirst({
            where: { user_id: userId, reply_id: replyId },
        });
        if (existing) {
            yield client_1.prisma.like.delete({ where: { id: existing.id } });
            return { liked: false };
        }
        yield client_1.prisma.like.create({
            data: {
                user_id: userId,
                reply_id: replyId,
            },
        });
        return { liked: true };
    });
}
// Get like count for thread
function getThreadLikeCount(threadId) {
    return __awaiter(this, void 0, void 0, function* () {
        const count = yield client_1.prisma.like.count({ where: { thread_id: threadId } });
        return count;
    });
}
// Get like count for reply
function getReplyLikeCount(replyId) {
    return __awaiter(this, void 0, void 0, function* () {
        const count = yield client_1.prisma.like.count({ where: { reply_id: replyId } });
        return count;
    });
}
