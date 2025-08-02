import cors from "cors";

const corsMiddleware = cors({
  origin: [
    "http://localhost:5173",
    "https://circle-be-production-6eed.up.railway.app/api/v1",
  ],
  credentials: true,
});

export default corsMiddleware;
