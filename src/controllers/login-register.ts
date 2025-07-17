import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/login-register";
import { registerSchema } from "../validations/login-register";
import { signToken } from "../utils/jwt";

export async function handleRegister(req: Request, res: Response) {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        code: 400,
        status: "fail",
        message: error.message,
      });
    }
    const { username, full_name, email, password } = req.body;
    const { user, token } = await registerUser(
      username,
      full_name,
      email,
      password
    );
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "Registrasi berhasil. Akun berhasil dibuat.",
      data: {
        user_id: user.id.toString(),
        username: user.username,
        name: user.full_name,
        email: user.email,
        token,
      },
    });
  } catch (err: any) {
    console.error("❌ Error Register:", err.message);
    return res.status(500).json({
      code: 500,
      status: "error",
      message: "Terjadi kesalahan pada server",
    });
  }
}

export async function handleLogin(req: Request, res: Response) {
  try {
    const { identifier, password } = req.body;
    const user = await loginUser(identifier, password);

    if (!user) {
      return res.status(401).json({
        code: 401,
        status: "error",
        message: "Username/email atau password salah.",
      });
    }

    const token = signToken({
      id: user.id,
    });

    return res.status(200).json({
      code: 200,
      status: "success",
      message: "Login successful.",
      data: {
        user_id: user.id.toString(),
        username: user.username,
        name: user.full_name,
        email: user.email,
        avatar: user.photo_profile ?? null,
        token,
      },
    });
  } catch (err: any) {
    console.error("❌ Error Login:", err);
    return res.status(500).json({
      code: 500,
      status: "error",
      message: "Terjadi kesalahan pada server.",
    });
  }
}
