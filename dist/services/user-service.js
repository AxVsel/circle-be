"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUser = void 0;
const client_1 = require("../prisma/client");
const editUser = async (userId, data) => {
    // Cek apakah username ingin diubah dan tidak kosong
    if (data.username) {
        const existingUser = await client_1.prisma.user.findFirst({
            where: {
                username: data.username,
                NOT: { id: userId }, // exclude diri sendiri
            },
        });
        if (existingUser) {
            throw new Error("Username already taken");
        }
    }
    // Lanjut update
    return await client_1.prisma.user.update({
        where: { id: userId },
        data,
    });
};
exports.editUser = editUser;
