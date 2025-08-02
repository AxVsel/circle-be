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
exports.createReply = createReply;
exports.getRepliesByThread = getRepliesByThread;
const client_1 = require("../prisma/client");
function createReply(data) {
    return __awaiter(this, void 0, void 0, function* () {
        // Validasi thread_id jika perlu
        const thread = yield client_1.prisma.thread.findUnique({
            where: { id: data.thread_id },
            select: { id: true },
        });
        if (!thread) {
            throw new Error("thread_id tidak valid");
        }
        // Transaksi: buat reply + update jumlah reply
        const [reply] = yield client_1.prisma.$transaction([
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
    });
}
function getRepliesByThread(threadId) {
    return __awaiter(this, void 0, void 0, function* () {
        const replies = yield client_1.prisma.reply.findMany({
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
    });
}
