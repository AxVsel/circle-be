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
exports.checkFollowing = exports.getAllUsersWithFollows = exports.followCounts = exports.followings = exports.followers = exports.unfollow = exports.follow = void 0;
const follow_service_1 = require("../services/follow-service");
const follow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const follower_id = Number((_a = req.session.user) === null || _a === void 0 ? void 0 : _a.id); // diasumsikan user login
    const { following_id } = req.body;
    if (!req.session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const result = yield (0, follow_service_1.followUser)(follower_id, Number(following_id));
        res.json(result);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.follow = follow;
const unfollow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const follower_id = Number((_a = req.session.user) === null || _a === void 0 ? void 0 : _a.id);
    const { following_id } = req.body;
    if (!req.session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    yield (0, follow_service_1.unfollowUser)(follower_id, Number(following_id));
    res.json({ message: "Unfollowed successfully" });
});
exports.unfollow = unfollow;
const followers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.userId);
    const result = yield (0, follow_service_1.getFollowers)(userId);
    if (!req.session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    res.json(result);
});
exports.followers = followers;
const followings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.userId);
    const result = yield (0, follow_service_1.getFollowing)(userId);
    if (!req.session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    res.json(result);
});
exports.followings = followings;
const followCounts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid userId" });
    }
    if (!req.session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const counts = yield (0, follow_service_1.getFollowCounts)(userId);
        res.status(200).json(counts);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching follow counts", error });
    }
});
exports.followCounts = followCounts;
const getAllUsersWithFollows = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        const users = yield (0, follow_service_1.getAllUsersWithFollowData)(search);
        const cleaned = users.map((user) => (Object.assign(Object.assign({}, user), { followers: user.followers.map((f) => f.follower), following: user.following.map((f) => f.following) })));
        res.status(200).json({ data: cleaned });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Failed to fetch users with follow data", error });
    }
});
exports.getAllUsersWithFollows = getAllUsersWithFollows;
const checkFollowing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const follower_id = Number((_a = req.session.user) === null || _a === void 0 ? void 0 : _a.id);
    const following_id = Number(req.params.userId);
    const result = yield (0, follow_service_1.isFollowing)(follower_id, following_id);
    if (!req.session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    res.json({ isFollowing: result });
});
exports.checkFollowing = checkFollowing;
