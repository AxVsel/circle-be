import cors from "cors";

const corsMiddleware = cors({
  origin: ["http://localhost:5173", "http://localhost:2002"],
  credentials: true,
});

export default corsMiddleware;
