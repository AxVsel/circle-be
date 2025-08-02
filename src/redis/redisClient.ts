// redisClient.ts
import { createClient } from "redis";

const client = createClient();

async function connectRedis() {
  client.on("error", (err) => console.error("Redis Client Error", err));
  await client.connect();
}

connectRedis(); // tidak pakai top-level await

export default client;
