import { toggleThreadLike, toggleReplyLike, getThreadLikeCount, getReplyLikeCount, } from "../services/like-service";
// Toggle like for thread
export async function likeThread(req, res) {
    var _a;
    const userId = (_a = req.session.user) === null || _a === void 0 ? void 0 : _a.id;
    const threadId = Number(req.params.threadId);
    if (!userId)
        return res.status(401).json({ message: "Unauthorized" });
    if (Number.isNaN(threadId))
        return res.status(400).json({ message: "Invalid threadId" });
    const result = await toggleThreadLike(userId, threadId);
    res.json(result);
}
// Toggle like for reply
export async function likeReply(req, res) {
    var _a;
    const userId = (_a = req.session.user) === null || _a === void 0 ? void 0 : _a.id;
    const replyId = Number(req.params.replyId);
    if (!userId)
        return res.status(401).json({ message: "Unauthorized" });
    if (Number.isNaN(replyId))
        return res.status(400).json({ message: "Invalid replyId" });
    const result = await toggleReplyLike(userId, replyId);
    res.json(result);
}
// Get thread like count
export async function getThreadLikes(req, res) {
    const threadId = Number(req.params.threadId);
    if (Number.isNaN(threadId))
        return res.status(400).json({ message: "Invalid threadId" });
    const count = await getThreadLikeCount(threadId);
    res.json({ count });
}
// Get reply like count
export async function getReplyLikes(req, res) {
    const replyId = Number(req.params.replyId);
    if (Number.isNaN(replyId))
        return res.status(400).json({ message: "Invalid replyId" });
    const count = await getReplyLikeCount(replyId);
    res.json({ count });
}
