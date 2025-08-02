"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserProfile = void 0;
const user_service_1 = require("../services/user-service");
const updateUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const userId = parseInt(req.params.id); // ✅ sesuaikan dengan route
    const { full_name, username, bio } = req.body;
    const photo_profile = (_c = (_b = (_a = req.files) === null || _a === void 0 ? void 0 : _a["photo_profile"]) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.filename;
    const background = (_f = (_e = (_d = req.files) === null || _d === void 0 ? void 0 : _d["background"]) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.filename;
    if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const updatedUser = yield (0, user_service_1.editUser)(userId, {
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
});
exports.updateUserProfile = updateUserProfile;
