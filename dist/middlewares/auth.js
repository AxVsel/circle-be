"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
const jwt_1 = require("../utils/jwt"); // pastikan ini mengembalikan payload token yang sudah didecode
function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            code: 401,
            status: "unauthorized",
            message: "Token tidak ditemukan. Silakan login terlebih dahulu.",
        });
    }
    try {
        const decoded = (0, jwt_1.verifyToken)(token);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({
            code: 401,
            status: "unauthorized",
            message: "Token tidak valid atau telah kedaluwarsa.",
        });
    }
}
