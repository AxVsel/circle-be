import { registerUser, loginUser } from "../services/auth-service";
import { registerSchema } from "../validations/login-register";
import { signToken } from "../utils/jwt";
export async function handleRegister(req, res) {
    var _a, _b;
    try {
        // Validasi request body
        const { error } = registerSchema.validate(req.body);
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
        const { user } = await registerUser(username, full_name, email, password, photo_profile, background);
        // Simpan ke dalam session
        req.session.user = {
            id: user.id,
            username: user.username,
            email: user.email,
        };
        // Buat token dan simpan ke cookie
        const token = signToken({ id: user.id });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 24 * 60 * 60 * 1000, // 1 hari
            sameSite: "lax",
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
}
export async function handleLogin(req, res) {
    var _a, _b;
    try {
        const { identifier, password } = req.body;
        const user = await loginUser(identifier, password);
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
        const token = signToken({ id: user.id });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: "lax",
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
}
export async function handleLogout(req, res) {
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
}
