import { followUser, unfollowUser, getFollowers, getFollowing, getFollowCounts, isFollowing, getAllUsersWithFollowData, } from "../services/follow-service";
export const follow = async (req, res) => {
    var _a;
    const follower_id = Number((_a = req.session.user) === null || _a === void 0 ? void 0 : _a.id); // diasumsikan user login
    const { following_id } = req.body;
    if (!req.session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const result = await followUser(follower_id, Number(following_id));
        res.json(result);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
export const unfollow = async (req, res) => {
    var _a;
    const follower_id = Number((_a = req.session.user) === null || _a === void 0 ? void 0 : _a.id);
    const { following_id } = req.body;
    if (!req.session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    await unfollowUser(follower_id, Number(following_id));
    res.json({ message: "Unfollowed successfully" });
};
export const followers = async (req, res) => {
    const userId = Number(req.params.userId);
    const result = await getFollowers(userId);
    if (!req.session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    res.json(result);
};
export const followings = async (req, res) => {
    const userId = Number(req.params.userId);
    const result = await getFollowing(userId);
    if (!req.session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    res.json(result);
};
export const followCounts = async (req, res) => {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid userId" });
    }
    if (!req.session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const counts = await getFollowCounts(userId);
        res.status(200).json(counts);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching follow counts", error });
    }
};
export const getAllUsersWithFollows = async (req, res) => {
    try {
        const search = req.query.search;
        const users = await getAllUsersWithFollowData(search);
        const cleaned = users.map((user) => (Object.assign(Object.assign({}, user), { followers: user.followers.map((f) => f.follower), following: user.following.map((f) => f.following) })));
        res.status(200).json({ data: cleaned });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Failed to fetch users with follow data", error });
    }
};
export const checkFollowing = async (req, res) => {
    var _a;
    const follower_id = Number((_a = req.session.user) === null || _a === void 0 ? void 0 : _a.id);
    const following_id = Number(req.params.userId);
    const result = await isFollowing(follower_id, following_id);
    if (!req.session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    res.json({ isFollowing: result });
};
