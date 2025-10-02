import multer, { FileFilterCallback } from "multer";
import path from "path";
import fs from "fs";
import { Request } from "express";

// Konfigurasi storage dinamis berdasarkan fieldname
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = "src/uploadUser/";

    if (file.fieldname === "photo_profile") {
      uploadPath += "profile/";
    } else if (file.fieldname === "background") {
      uploadPath += "background/";
    }

    // Pastikan folder ada
    fs.mkdirSync(uploadPath, { recursive: true });

    cb(null, uploadPath);
  },
  filename: (_req, file, cb) => {
    const timestamp = Date.now();
    const sanitizedName = file.originalname.replace(/\s+/g, "-");
    cb(null, `${timestamp}-${sanitizedName}`);
  },
});

// Filter file hanya untuk gambar
const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowed = [".jpg", ".jpeg", ".png"];
  if (!allowed.includes(ext)) {
    return cb(new Error("Only .jpg, .jpeg, and .png files are allowed"));
  }
  cb(null, true);
};

// Middleware upload dengan 2 field: photo_profile & background
export const uploadUser = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
});
