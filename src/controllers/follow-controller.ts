import { Request, Response } from "express";
import {
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
  getFollowCounts,
  isFollowing,
  getAllUsersWithFollowData,
} from "../services/follow-service";

export const follow = async (req: Request, res: Response) => {
  const follower_id = Number(req.session.user?.id); // diasumsikan user login
  const { following_id } = req.body;
  if (!req.session.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const result = await followUser(follower_id, Number(following_id));
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const unfollow = async (req: Request, res: Response) => {
  const follower_id = Number(req.session.user?.id);
  const { following_id } = req.body;
  if (!req.session.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  await unfollowUser(follower_id, Number(following_id));
  res.json({ message: "Unfollowed successfully" });
};

export const followers = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  const result = await getFollowers(userId);
  if (!req.session.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.json(result);
};

export const followings = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  const result = await getFollowing(userId);
  if (!req.session.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.json(result);
};

export const followCounts = async (req: Request, res: Response) => {
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
  } catch (error) {
    res.status(500).json({ message: "Error fetching follow counts", error });
  }
};

export const getAllUsersWithFollows = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string | undefined;

    const users = await getAllUsersWithFollowData(search);

    const cleaned = users.map((user: any) => ({
      ...user,
      followers: user.followers.map((f: any) => f.follower),
      following: user.following.map((f: any) => f.following),
    }));

    res.status(200).json({ data: cleaned });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch users with follow data", error });
  }
};

export const checkFollowing = async (req: Request, res: Response) => {
  const follower_id = Number(req.session.user?.id);
  const following_id = Number(req.params.userId);
  const result = await isFollowing(follower_id, following_id);
  if (!req.session.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.json({ isFollowing: result });
};
