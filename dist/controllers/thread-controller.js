import { createThread, getAllThreads } from "../services/thread-service";
import { getRedisClient } from "../redis/redisClient";
import { prisma } from "../prisma/client";
export async function handleCreateThread(req, res) {
    var _a;
    try {
        const { content } = req.body;
        const user = req.user;
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const imagePath = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        const newThread = await createThread({
            content,
            image: imagePath,
            userId: user.id,
        });
        const threadWithUser = await prisma.thread.findFirst({
            where: { id: newThread.id },
            include: {
                user: {
                    select: {
                        id: true,
                        full_name: true,
                        username: true,
                        photo_profile: true,
                    },
                },
            },
        });
        const redisClient = getRedisClient();
        // ⏺️ Simpan ke Redis
        if (threadWithUser) {
            await redisClient.lPush("latest_threads", JSON.stringify(threadWithUser));
            await redisClient.lTrim("latest_threads", 0, 49); // simpan max 50 thread
        }
        const io = req.app.locals.io;
        io.emit("new-thread", {
            id: threadWithUser === null || threadWithUser === void 0 ? void 0 : threadWithUser.id,
            user_id: threadWithUser === null || threadWithUser === void 0 ? void 0 : threadWithUser.id,
            content: threadWithUser === null || threadWithUser === void 0 ? void 0 : threadWithUser.content,
            image_url: threadWithUser === null || threadWithUser === void 0 ? void 0 : threadWithUser.image,
            timestamp: threadWithUser === null || threadWithUser === void 0 ? void 0 : threadWithUser.created_at,
            user: threadWithUser === null || threadWithUser === void 0 ? void 0 : threadWithUser.user,
        });
        return res.status(201).json({
            code: 200,
            status: "success",
            message: "Thread berhasil diposting.",
            data: {
                tweet: {
                    id: threadWithUser === null || threadWithUser === void 0 ? void 0 : threadWithUser.id,
                    user_id: threadWithUser === null || threadWithUser === void 0 ? void 0 : threadWithUser.id,
                    content: threadWithUser === null || threadWithUser === void 0 ? void 0 : threadWithUser.content,
                    image_url: threadWithUser === null || threadWithUser === void 0 ? void 0 : threadWithUser.image,
                    timestamp: threadWithUser === null || threadWithUser === void 0 ? void 0 : threadWithUser.created_at,
                    user: threadWithUser === null || threadWithUser === void 0 ? void 0 : threadWithUser.user,
                },
            },
        });
    }
    catch (err) {
        console.error("❌ Error Thread:", err);
        return res
            .status(500)
            .json({ message: "Server error saat membuat thread" });
    }
}
// controller.ts
export async function handleGetAllThreads(req, res) {
    var _a;
    try {
        const offset = parseInt(req.query.offset) || 0;
        const limit = parseInt(req.query.limit) || 10;
        const userId = (_a = req.session.user) === null || _a === void 0 ? void 0 : _a.id;
        const cacheKey = `threads:offset=${offset}:limit=${limit}:user=${userId !== null && userId !== void 0 ? userId : "guest"}`;
        const redisClient = getRedisClient();
        // 🔍 Cek cache Redis
        const cached = await redisClient.get(cacheKey);
        if (cached) {
            return res.status(200).json({
                code: 200,
                status: "success (cache)",
                message: "Berhasil mengambil thread dari cache.",
                data: {
                    tweet: JSON.parse(cached),
                },
            });
        }
        // 🚀 Ambil dari DB kalau belum ada di cache
        const threads = await getAllThreads(offset, limit, userId);
        const formatted = threads.map((thread) => {
            var _a, _b;
            if (!thread.user)
                throw new Error("Thread tidak memiliki user.");
            return {
                id: thread.id,
                user_id: thread.user.id,
                content: thread.content,
                image_url: (_a = thread.image) !== null && _a !== void 0 ? _a : null,
                number_of_replies: (_b = thread.number_of_replies) !== null && _b !== void 0 ? _b : null,
                like_count: thread.likeCount,
                is_liked: thread.isLiked,
                timestamp: thread.created_at,
                user: {
                    id: thread.user.id,
                    username: thread.user.username,
                    full_name: thread.user.full_name,
                    photo_profile: thread.user.photo_profile,
                },
            };
        });
        await redisClient.set(cacheKey, JSON.stringify(formatted), {
            EX: 60,
        });
        console.log("💾 Data thread disimpan di Redis dengan key:", cacheKey);
        console.log("Apakah data dari DB berhasil diambil?", threads.length);
        return res.status(200).json({
            code: 200,
            status: "success",
            message: "Berhasil mengambil thread.",
            data: {
                tweet: formatted,
            },
        });
    }
    catch (err) {
        console.error("❌ Error getAllThreads:", err);
        return res.status(500).json({
            code: 500,
            status: "error",
            message: "Terjadi kesalahan saat mengambil thread.",
        });
    }
}
