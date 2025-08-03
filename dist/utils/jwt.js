import dotenv from "dotenv";
dotenv.config(); // WAJIB: load .env sebelum akses process.env
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
export function signToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}
export function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}
export function signResetToken(email) {
    return jwt.sign({ email }, JWT_SECRET, { expiresIn: "15m" });
}
export function verifyResetToken(token) {
    return jwt.verify(token, JWT_SECRET);
}
