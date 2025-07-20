import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import corsMiddleware from "./middlewares/cors";
import loginRegister from "../src/routes/login-register";

dotenv.config();

const app = express();
app.use(corsMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const isProduction = process.env.NODE_ENV === "production";

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: isProduction, // true jika NODE_ENV=production
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 hari
    },
  })
);

app.use("/api/v1/auth", loginRegister);

const PORT = process.env.PORT || 2200;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
