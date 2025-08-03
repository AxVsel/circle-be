import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
    destination: "src/uploadReply/",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) {
        return cb(new Error("Only images are allowed (.jpg, .jpeg, .png)"));
    }
    cb(null, true);
};
export const uploadReply = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024, // 2MB
    },
});
