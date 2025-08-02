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
exports.handleCreateReply = handleCreateReply;
exports.handleGetReplies = handleGetReplies;
const reply_service_1 = require("../services/reply-service");
function handleCreateReply(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const userId = (_a = req.session.user) === null || _a === void 0 ? void 0 : _a.id;
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
        const reply = yield (0, reply_service_1.createReply)({
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
    });
}
function handleGetReplies(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const threadId = Number(req.params.threadId);
            const replies = yield (0, reply_service_1.getRepliesByThread)(threadId);
            res.json({ replies });
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to fetch replies" });
        }
    });
}
