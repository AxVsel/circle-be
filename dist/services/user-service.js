import { prisma } from "../prisma/client";
export const editUser = async (userId, data) => {
    // Cek apakah username ingin diubah dan tidak kosong
    if (data.username) {
        const existingUser = await prisma.user.findFirst({
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
    return await prisma.user.update({
        where: { id: userId },
        data,
    });
};
