// redisClient.ts
import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config(); // agar bisa baca .env kalau dijalankan lokal

const client = createClient({
  url: process.env.REDIS_URL, // ambil dari env
});

client.on("error", (err) => {
  console.error("❌ Redis Client Error:", err);
});

export async function connectRedis() {
  try {
    await client.connect();
    console.log("✅ Redis connected successfully");
  } catch (error) {
    console.error("❌ Failed to connect to Redis:", error);
  }
}

export default client;
