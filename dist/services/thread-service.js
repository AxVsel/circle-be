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
exports.createThread = createThread;
exports.getAllThreads = getAllThreads;
const client_1 = require("../prisma/client");
function createThread(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const thread = yield client_1.prisma.thread.create({
            data: {
                content: data.content,
                image: data.image || null,
                userId: data.userId,
            },
        });
        return thread;
    });
}
function getAllThreads(offset, limit, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const threads = yield client_1.prisma.thread.findMany({
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
    });
}
