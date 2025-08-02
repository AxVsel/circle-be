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
exports.isFollowing = exports.getAllUsersWithFollowData = exports.getFollowing = exports.getFollowers = exports.unfollowUser = exports.followUser = void 0;
exports.getFollowCounts = getFollowCounts;
// // services/like.service.ts
const client_1 = require("../prisma/client");
// Like/unlike thread
const followUser = (follower_id, following_id) => __awaiter(void 0, void 0, void 0, function* () {
    if (follower_id === following_id)
        throw new Error("Cannot follow yourself");
    // Cek apakah sudah follow
    const existing = yield client_1.prisma.following.findFirst({
        where: { follower_id, following_id },
    });
    if (existing)
        throw new Error("Already following");
    return client_1.prisma.following.create({
        data: { follower_id, following_id },
    });
});
exports.followUser = followUser;
const unfollowUser = (follower_id, following_id) => __awaiter(void 0, void 0, void 0, function* () {
    return client_1.prisma.following.deleteMany({
        where: { follower_id, following_id },
    });
});
exports.unfollowUser = unfollowUser;
const getFollowers = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return client_1.prisma.following.findMany({
        where: { following_id: userId },
        include: { follower: true },
    });
});
exports.getFollowers = getFollowers;
const getFollowing = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return client_1.prisma.following.findMany({
        where: { follower_id: userId },
        include: { following: true },
    });
});
exports.getFollowing = getFollowing;
const getAllUsersWithFollowData = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getAllUsersWithFollowData = getAllUsersWithFollowData;
function getFollowCounts(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const followersCount = yield client_1.prisma.following.count({
            where: {
                following_id: userId,
            },
        });
        const followingsCount = yield client_1.prisma.following.count({
            where: {
                follower_id: userId,
            },
        });
        return { followersCount, followingsCount };
    });
}
const isFollowing = (follower_id, following_id) => __awaiter(void 0, void 0, void 0, function* () {
    const follow = yield client_1.prisma.following.findFirst({
        where: { follower_id, following_id },
    });
    return !!follow;
});
exports.isFollowing = isFollowing;
