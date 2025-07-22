import { Server } from "socket.io";
import http from "http";
import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

import corsMiddleware from "./middlewares/cors";
import loginRegister from "../src/routes/login-register";
import thread from "../src/routes/thread";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";
const app = express();
const server = http.createServer(app);

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

// Routes
app.use("/api/v1/auth", loginRegister);
app.use("/api/v1/auth", thread);

// Jalankan pakai `server.listen` (bukan `app.listen`)
const PORT = process.env.PORT || 2200;
server.listen(PORT, () => {
  console.log(`Server with socket.io running at http://localhost:${PORT}`);
});
