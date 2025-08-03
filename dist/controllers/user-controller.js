import { editUser } from "../services/user-service";
export const updateUserProfile = async (req, res) => {
    var _a, _b, _c, _d, _e, _f;
    const userId = parseInt(req.params.id); // ✅ sesuaikan dengan route
    const { full_name, username, bio } = req.body;
    const photo_profile = (_c = (_b = (_a = req.files) === null || _a === void 0 ? void 0 : _a["photo_profile"]) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.filename;
    const background = (_f = (_e = (_d = req.files) === null || _d === void 0 ? void 0 : _d["background"]) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.filename;
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
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update profile",
            error: error.message,
        });
    }
};
