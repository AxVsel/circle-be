import { Server } from "socket.io";
import http from "http";
import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

import corsMiddleware from "./middlewares/cors";
import auth from "./routes/auth-route";
import thread from "./routes/thread-route";
import reply from "./routes/reply-route";
import like from "./routes/like-route";
import follow from "./routes/follow-route";
import user from "./routes/user-route";

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { swaggerOptions } from "./swagger/swaggerOptions";
import { connectRedis } from "./redis/redisClient";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";
const app = express();
const server = http.createServer(app);
const specs = swaggerJsdoc(swaggerOptions);
connectRedis();
// WebSocket Setup
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // frontend
    credentials: true,
  },
});
app.locals.io = io;
io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

// Middleware
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: isProduction,
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

// Static for image/thread uploads
app.use(
  "/uploadThreads",
  express.static(path.join(__dirname, "..", "src/uploadThread"))
);

app.use(
  "/uploadUser",
  express.static(path.join(__dirname, "..", "src/uploadUser/profile"))
);

app.use(
  "/uploadBackground",
  express.static(path.join(__dirname, "..", "src/uploadUser/background"))
);

app.use(
  "/uploadReplys",
  express.static(path.join(__dirname, "..", "src/uploadReply"))
);

// Routes
app.use("/api/v1/auth", auth);
app.use("/api/v1/thread", thread);
app.use("/api/v1/reply", reply);
app.use("/api/v1/likes", like);
app.use("/api/v1/follows", follow);
app.use("/api/v1/users", user);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Jalankan pakai `server.listen` (bukan `app.listen`)
const PORT = process.env.PORT || 2200;
server.listen(PORT, () => {
  console.log(`Server with socket.io running at http://localhost:${PORT}`);
  console.log(`Swagger UI on http://localhost:${PORT}/api-docs`);
});
