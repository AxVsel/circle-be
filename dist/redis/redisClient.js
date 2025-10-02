"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRedis = connectRedis;
// redisClient.ts
const redis_1 = require("redis");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // agar bisa baca .env kalau dijalankan lokal
const client = (0, redis_1.createClient)({
    url: process.env.REDIS_URL, // ambil dari env
});
client.on("error", (err) => {
    console.error("❌ Redis Client Error:", err);
});
async function connectRedis() {
    try {
        await client.connect();
        console.log("✅ Redis connected successfully");
    }
    catch (error) {
        console.error("❌ Failed to connect to Redis:", error);
    }
}
exports.default = client;
