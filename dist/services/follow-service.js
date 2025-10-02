"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFollowing = exports.getAllUsersWithFollowData = exports.getFollowing = exports.getFollowers = exports.unfollowUser = exports.followUser = void 0;
exports.getFollowCounts = getFollowCounts;
// // services/like.service.ts
const client_1 = require("../prisma/client");
// Like/unlike thread
const followUser = async (follower_id, following_id) => {
    if (follower_id === following_id)
        throw new Error("Cannot follow yourself");
    // Cek apakah sudah follow
    const existing = await client_1.prisma.following.findFirst({
        where: { follower_id, following_id },
    });
    if (existing)
        throw new Error("Already following");
    return client_1.prisma.following.create({
        data: { follower_id, following_id },
    });
};
exports.followUser = followUser;
const unfollowUser = async (follower_id, following_id) => {
    return client_1.prisma.following.deleteMany({
        where: { follower_id, following_id },
    });
};
exports.unfollowUser = unfollowUser;
const getFollowers = async (userId) => {
    return client_1.prisma.following.findMany({
        where: { following_id: userId },
        include: { follower: true },
    });
};
exports.getFollowers = getFollowers;
const getFollowing = async (userId) => {
    return client_1.prisma.following.findMany({
        where: { follower_id: userId },
        include: { following: true },
    });
};
exports.getFollowing = getFollowing;
const getAllUsersWithFollowData = async (searchTerm) => {
    return client_1.prisma.user.findMany({
        where: searchTerm
            ? {
                OR: [
                    {
                        full_name: {
                            contains: searchTerm,
                            mode: "insensitive",
                        },
                    },
                    {
                        username: {
                            contains: searchTerm,
                            mode: "insensitive",
                        },
                    },
                ],
            }
            : {},
        select: {
            id: true,
            full_name: true,
            username: true,
            bio: true,
            photo_profile: true,
            followers: {
                select: {
                    follower: {
                        select: {
                            id: true,
                            full_name: true,
                            photo_profile: true,
                        },
                    },
                },
            },
            following: {
                select: {
                    following: {
                        select: {
                            id: true,
                            full_name: true,
                            photo_profile: true,
                        },
                    },
                },
            },
        },
    });
};
exports.getAllUsersWithFollowData = getAllUsersWithFollowData;
async function getFollowCounts(userId) {
    const followersCount = await client_1.prisma.following.count({
        where: {
            following_id: userId,
        },
    });
    const followingsCount = await client_1.prisma.following.count({
        where: {
            follower_id: userId,
        },
    });
    return { followersCount, followingsCount };
}
const isFollowing = async (follower_id, following_id) => {
    const follow = await client_1.prisma.following.findFirst({
        where: { follower_id, following_id },
    });
    return !!follow;
};
exports.isFollowing = isFollowing;
