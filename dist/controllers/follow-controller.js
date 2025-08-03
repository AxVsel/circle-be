"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFollowing = exports.getAllUsersWithFollows = exports.followCounts = exports.followings = exports.followers = exports.unfollow = exports.follow = void 0;
const follow_service_1 = require("../services/follow-service");
const follow = async (req, res) => {
    var _a;
    const follower_id = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    const { following_id } = req.body;
    if (!follower_id) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const result = await (0, follow_service_1.followUser)(follower_id, Number(following_id));
        res.json(result);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.follow = follow;
const unfollow = async (req, res) => {
    var _a;
    const follower_id = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    const { following_id } = req.body;
    if (!follower_id) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    await (0, follow_service_1.unfollowUser)(follower_id, Number(following_id));
    res.json({ message: "Unfollowed successfully" });
};
exports.unfollow = unfollow;
const followers = async (req, res) => {
    const userId = Number(req.params.userId);
    const result = await (0, follow_service_1.getFollowers)(userId);
    if (!userId) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    res.json(result);
};
exports.followers = followers;
const followings = async (req, res) => {
    const userId = Number(req.params.userId);
    const result = await (0, follow_service_1.getFollowing)(userId);
    const user = req.user;
    if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    res.json(result);
};
exports.followings = followings;
const followCounts = async (req, res) => {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid userId" });
    }
    const user = req.user;
    if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const counts = await (0, follow_service_1.getFollowCounts)(userId);
        res.status(200).json(counts);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching follow counts", error });
    }
};
exports.followCounts = followCounts;
const getAllUsersWithFollows = async (req, res) => {
    try {
        const search = req.query.search;
        const users = await (0, follow_service_1.getAllUsersWithFollowData)(search);
        const cleaned = users.map((user) => (Object.assign(Object.assign({}, user), { followers: user.followers.map((f) => f.follower), following: user.following.map((f) => f.following) })));
        res.status(200).json({ data: cleaned });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Failed to fetch users with follow data", error });
    }
};
exports.getAllUsersWithFollows = getAllUsersWithFollows;
const checkFollowing = async (req, res) => {
    var _a;
    const follower_id = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    const following_id = Number(req.params.userId);
    const result = await (0, follow_service_1.isFollowing)(follower_id, following_id);
    if (!follower_id) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    res.json({ isFollowing: result });
};
exports.checkFollowing = checkFollowing;
