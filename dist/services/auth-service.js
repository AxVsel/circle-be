import bcrypt from "bcrypt";
import { prisma } from "../prisma/client";
export async function registerUser(username, full_name, email, password, photo_profile, background) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || password.length < 6) {
        throw new Error("Email atau password tidak valid");
    }
    const existing = await prisma.user.findFirst({
        where: {
            OR: [{ email }, { username }],
        },
    });
    if (existing) {
        throw new Error("Email atau username sudah terdaftar");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            username,
            full_name,
            email,
            password: hashedPassword,
            photo_profile,
            background,
        },
    });
    // Hapus pembuatan token dari sini
    return { user };
}
export async function loginUser(identifier, password) {
    try {
        // console.log("📥 Input:", identifier, password);
        const user = await prisma.user.findFirst({
            where: {
                OR: [{ email: identifier }, { username: identifier }],
            },
        });
        if (!user) {
            console.log("❌ User not found");
            return null;
        }
        console.log("✅ User found:", user);
        if (!(user === null || user === void 0 ? void 0 : user.password)) {
            console.log("❌ Password null");
            return null;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("🔐 Password valid?", isPasswordValid);
        if (!isPasswordValid)
            return null;
        return user;
    }
    catch (error) {
        console.error("❌ Error in loginUser:", error);
        throw error;
    }
}
