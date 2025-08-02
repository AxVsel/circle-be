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
exports.handleRegister = handleRegister;
exports.handleLogin = handleLogin;
exports.handleLogout = handleLogout;
const auth_service_1 = require("../services/auth-service");
const login_register_1 = require("../validations/login-register");
const jwt_1 = require("../utils/jwt");
function handleRegister(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            // Validasi request body
            const { error } = login_register_1.registerSchema.validate(req.body);
            if (error) {
                return res.status(400).json({
                    code: 400,
                    status: "fail",
                    message: error.message,
                });
            }
            // Ambil data dari request
            const { username, full_name, email, password } = req.body;
            // Buat URL profil dan background dari Dicebear
            const photo_profile = `https://api.dicebear.com/9.x/adventurer/svg?seed=${full_name}`;
            const background = `https://api.dicebear.com/9.x/glass/svg?seed=${username}`;
            // Daftarkan user
            const { user } = yield (0, auth_service_1.registerUser)(username, full_name, email, password, photo_profile, background);
            // Simpan ke dalam session
            req.session.user = {
                id: user.id,
                username: user.username,
                email: user.email,
            };
            // Buat token dan simpan ke cookie
            const token = (0, jwt_1.signToken)({ id: user.id });
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 24 * 60 * 60 * 1000, // 1 hari
                sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            });
            // Kirim response sukses
            return res.status(200).json({
                code: 200,
                status: "success",
                message: "Register successful.",
                data: {
                    user_id: user.id,
                    username: user.username,
                    name: user.full_name,
                    email: user.email,
                    photo_profile: (_a = user.photo_profile) !== null && _a !== void 0 ? _a : null,
                    background: (_b = user.background) !== null && _b !== void 0 ? _b : null,
                    token,
                },
            });
        }
        catch (err) {
            console.error("❌ Error Register:", err.message);
            return res.status(500).json({
                code: 500,
                status: "error",
                message: err.message || "Terjadi kesalahan pada server",
            });
        }
    });
}
function handleLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            const { identifier, password } = req.body;
            const user = yield (0, auth_service_1.loginUser)(identifier, password);
            if (!user) {
                return res.status(401).json({
                    code: 401,
                    status: "error",
                    message: "Username/email atau password salah.",
                });
            }
            req.session.user = {
                id: user.id,
                username: user.username,
                email: user.email,
            };
            const token = (0, jwt_1.signToken)({ id: user.id });
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 24 * 60 * 60 * 1000,
                sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            });
            return res.status(200).json({
                code: 200,
                status: "success",
                message: "Login successful.",
                data: {
                    user_id: user.id,
                    username: user.username,
                    name: user.full_name,
                    email: user.email,
                    photo_profile: (_a = user.photo_profile) !== null && _a !== void 0 ? _a : null,
                    background: (_b = user.background) !== null && _b !== void 0 ? _b : null,
                    bio: user.bio,
                    token,
                },
            });
        }
        catch (err) {
            console.error("❌ Error Login:", err);
            return res.status(500).json({
                code: 500,
                status: "error",
                message: "Terjadi kesalahan pada server.",
            });
        }
    });
}
function handleLogout(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Hapus session dari server
            req.session.destroy((err) => {
                if (err) {
                    console.error("❌ Error saat destroy session:", err);
                    return res.status(500).json({
                        code: 500,
                        status: "error",
                        message: "Gagal logout.",
                    });
                }
                // Hapus cookie dari client
                res.clearCookie("connect.sid", {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "lax",
                    path: "/", // penting agar cocok dengan path cookie
                });
                res.clearCookie("token");
                return res.status(200).json({
                    code: 200,
                    status: "success",
                    message: "Logout berhasil.",
                });
            });
        }
        catch (err) {
            console.error("❌ Error Logout:", err);
            return res.status(500).json({
                code: 500,
                status: "error",
                message: "Terjadi kesalahan saat logout.",
            });
        }
    });
}
