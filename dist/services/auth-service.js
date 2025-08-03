"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
exports.loginUser = loginUser;
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = require("../prisma/client");
async function registerUser(username, full_name, email, password, photo_profile, background) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || password.length < 6) {
        throw new Error("Email atau password tidak valid");
    }
    const existing = await client_1.prisma.user.findFirst({
        where: {
            OR: [{ email }, { username }],
        },
    });
    if (existing) {
        throw new Error("Email atau username sudah terdaftar");
    }
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const user = await client_1.prisma.user.create({
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
async function loginUser(identifier, password) {
    try {
        // console.log("📥 Input:", identifier, password);
        const user = await client_1.prisma.user.findFirst({
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
        const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
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
