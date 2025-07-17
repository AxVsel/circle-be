import express from "express";
import dotenv from "dotenv";
import loginRegister from "../src/routes/login-register";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1/auth", loginRegister);

app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 2200;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
