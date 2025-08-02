// src/controllers/userController.ts
import { Request, Response } from "express";
import { editUser } from "../services/user-service";

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
