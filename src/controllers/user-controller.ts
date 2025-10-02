// src/controllers/userController.ts
import { Request, Response } from "express";
import {
  editUser,
  getThreadsByUser,
  getUserMediaThreads,
} from "../services/user-service";

export async function handleGetMyThreads(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      return res.status(401).json({
        code: 401,
        status: "error",
        message: "Unauthorized",
      });
    }

    const offset = parseInt(req.query.offset as string) || 0;
    const limit = parseInt(req.query.limit as string) || 10;

    const threads = await getThreadsByUser(userId, offset, limit);

    return res.status(200).json({
      code: 200,
      status: "success",
      message: "User threads retrieved successfully",
      data: threads,
    });
  } catch (error: any) {
    console.error("handleGetMyThreads error:", error);
    return res.status(500).json({
      code: 500,
      status: "error",
      message: "Internal server error",
    });
  }
}

export async function handleGetMyMediaThreads(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      return res.status(401).json({
        code: 401,
        status: "error",
        message: "Unauthorized",
      });
    }

    const offset = parseInt(req.query.offset as string) || 0;
    const limit = parseInt(req.query.limit as string) || 10;

    const mediaThreads = await getUserMediaThreads(userId, offset, limit);

    return res.status(200).json({
      code: 200,
      status: "success",
      message: "User media threads retrieved successfully",
      data: mediaThreads,
    });
  } catch (error: any) {
    console.error("handleGetMyMediaThreads error:", error);
    return res.status(500).json({
      code: 500,
      status: "error",
      message: "Internal server error",
    });
  }
}

export const updateUserProfile = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id); // ✅ sesuaikan dengan route
  const { full_name, username, bio } = req.body;

  const photo_profile = (req.files as any)?.["photo_profile"]?.[0]?.filename;
  const background = (req.files as any)?.["background"]?.[0]?.filename;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const updatedUser = await editUser(userId, {
      full_name,
      username,
      photo_profile,
      background,
      bio,
    });

    res.status(200).json({
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to update profile",
      error: error.message,
    });
  }
};
