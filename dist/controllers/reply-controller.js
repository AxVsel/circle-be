"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCreateReply = handleCreateReply;
exports.handleGetReplies = handleGetReplies;
const reply_service_1 = require("../services/reply-service");
async function handleCreateReply(req, res) {
    var _a, _b;
    const userId = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    if (!userId)
        return res.status(401).json({ message: "Unauthorized" });
    const image = (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename;
    const { content } = req.body;
    const threadId = Number(req.params.threadId);
    if (!threadId || isNaN(threadId)) {
        return res.status(400).json({ message: "thread_id tidak valid" });
    }
    if (!content) {
        return res.status(400).json({ message: "Content is required" });
    }
    const reply = await (0, reply_service_1.createReply)({
        user_id: userId,
        thread_id: threadId,
        content,
        image,
    });
    console.log("DATA TO CREATE:", {
        user_id: userId,
        thread_id: Number(threadId),
        content,
        image,
    });
    res.status(201).json({ message: "Reply created", reply });
}
async function handleGetReplies(req, res) {
    try {
        const threadId = Number(req.params.threadId);
        const replies = await (0, reply_service_1.getRepliesByThread)(threadId);
        res.json({ replies });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch replies" });
    }
}
