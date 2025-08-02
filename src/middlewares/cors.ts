import cors from "cors";

const corsMiddleware = cors({
  origin: [
    "http://localhost:5173", // frontend lokal
    "https://circle-fe.vercel.app", // frontend production
    "https://circle-be-production-6eed.up.railway.app", // Swagger hosted di sini
  ],
  credentials: true,
});

export default corsMiddleware;
