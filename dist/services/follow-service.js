// // services/like.service.ts
import { prisma } from "../prisma/client";
// Like/unlike thread
export const followUser = async (follower_id, following_id) => {
    if (follower_id === following_id)
        throw new Error("Cannot follow yourself");
    // Cek apakah sudah follow
    const existing = await prisma.following.findFirst({
        where: { follower_id, following_id },
    });
    if (existing)
        throw new Error("Already following");
    return prisma.following.create({
        data: { follower_id, following_id },
    });
};
export const unfollowUser = async (follower_id, following_id) => {
    return prisma.following.deleteMany({
        where: { follower_id, following_id },
    });
};
export const getFollowers = async (userId) => {
    return prisma.following.findMany({
        where: { following_id: userId },
        include: { follower: true },
    });
};
export const getFollowing = async (userId) => {
    return prisma.following.findMany({
        where: { follower_id: userId },
        include: { following: true },
    });
};
export const getAllUsersWithFollowData = async (searchTerm) => {
    return prisma.user.findMany({
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
export async function getFollowCounts(userId) {
    const followersCount = await prisma.following.count({
        where: {
            following_id: userId,
        },
    });
    const followingsCount = await prisma.following.count({
        where: {
            follower_id: userId,
        },
    });
    return { followersCount, followingsCount };
}
export const isFollowing = async (follower_id, following_id) => {
    const follow = await prisma.following.findFirst({
        where: { follower_id, following_id },
    });
    return !!follow;
};
