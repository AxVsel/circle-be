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
exports.likeThread = likeThread;
exports.likeReply = likeReply;
exports.getThreadLikes = getThreadLikes;
exports.getReplyLikes = getReplyLikes;
const like_service_1 = require("../services/like-service");
// Toggle like for thread
function likeThread(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const userId = (_a = req.session.user) === null || _a === void 0 ? void 0 : _a.id;
        const threadId = Number(req.params.threadId);
        if (!userId)
            return res.status(401).json({ message: "Unauthorized" });
        if (Number.isNaN(threadId))
            return res.status(400).json({ message: "Invalid threadId" });
        const result = yield (0, like_service_1.toggleThreadLike)(userId, threadId);
        res.json(result);
    });
}
// Toggle like for reply
function likeReply(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const userId = (_a = req.session.user) === null || _a === void 0 ? void 0 : _a.id;
        const replyId = Number(req.params.replyId);
        if (!userId)
            return res.status(401).json({ message: "Unauthorized" });
        if (Number.isNaN(replyId))
            return res.status(400).json({ message: "Invalid replyId" });
        const result = yield (0, like_service_1.toggleReplyLike)(userId, replyId);
        res.json(result);
    });
}
// Get thread like count
function getThreadLikes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const threadId = Number(req.params.threadId);
        if (Number.isNaN(threadId))
            return res.status(400).json({ message: "Invalid threadId" });
        const count = yield (0, like_service_1.getThreadLikeCount)(threadId);
        res.json({ count });
    });
}
// Get reply like count
function getReplyLikes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const replyId = Number(req.params.replyId);
        if (Number.isNaN(replyId))
            return res.status(400).json({ message: "Invalid replyId" });
        const count = yield (0, like_service_1.getReplyLikeCount)(replyId);
        res.json({ count });
    });
}
