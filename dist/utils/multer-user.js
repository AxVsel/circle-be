"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadUser = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Konfigurasi storage dinamis berdasarkan fieldname
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        let uploadPath = "src/uploadUser/";
        if (file.fieldname === "photo_profile") {
            uploadPath += "profile/";
        }
        else if (file.fieldname === "background") {
            uploadPath += "background/";
        }
        // Pastikan folder ada
        fs_1.default.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: (_req, file, cb) => {
        const timestamp = Date.now();
        const sanitizedName = file.originalname.replace(/\s+/g, "-");
        cb(null, `${timestamp}-${sanitizedName}`);
    },
});
// Filter file hanya untuk gambar
const fileFilter = (_req, file, cb) => {
    const ext = path_1.default.extname(file.originalname).toLowerCase();
    const allowed = [".jpg", ".jpeg", ".png"];
    if (!allowed.includes(ext)) {
        return cb(new Error("Only .jpg, .jpeg, and .png files are allowed"));
    }
    cb(null, true);
};
// Middleware upload dengan 2 field: photo_profile & background
exports.uploadUser = (0, multer_1.default)({
    storage,
    fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10 MB
    },
});
