"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeThread = likeThread;
exports.likeReply = likeReply;
exports.getThreadLikes = getThreadLikes;
exports.getReplyLikes = getReplyLikes;
const like_service_1 = require("../services/like-service");
// Toggle like for thread
async function likeThread(req, res) {
    var _a;
    const userId = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    const threadId = Number(req.params.threadId);
    if (!userId)
        return res.status(401).json({ message: "Unauthorized" });
    if (Number.isNaN(threadId))
        return res.status(400).json({ message: "Invalid threadId" });
    const result = await (0, like_service_1.toggleThreadLike)(userId, threadId);
    res.json(result);
}
// Toggle like for reply
async function likeReply(req, res) {
    var _a;
    const userId = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    const replyId = Number(req.params.replyId);
    if (!userId)
        return res.status(401).json({ message: "Unauthorized" });
    if (Number.isNaN(replyId))
        return res.status(400).json({ message: "Invalid replyId" });
    const result = await (0, like_service_1.toggleReplyLike)(userId, replyId);
    res.json(result);
}
// Get thread like count
async function getThreadLikes(req, res) {
    const threadId = Number(req.params.threadId);
    if (Number.isNaN(threadId))
        return res.status(400).json({ message: "Invalid threadId" });
    const count = await (0, like_service_1.getThreadLikeCount)(threadId);
    res.json({ count });
}
// Get reply like count
async function getReplyLikes(req, res) {
    const replyId = Number(req.params.replyId);
    if (Number.isNaN(replyId))
        return res.status(400).json({ message: "Invalid replyId" });
    const count = await (0, like_service_1.getReplyLikeCount)(replyId);
    res.json({ count });
}
