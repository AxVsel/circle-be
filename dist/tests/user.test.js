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
// Wajib sebelum import service atau prisma
jest.mock("../prisma/client"); // Akan mengambil dari __mocks__/client.ts
const client_1 = require("../prisma/client");
const user_service_1 = require("../services/user-service");
describe("editUser", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should throw an error if username is taken by another user", () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock user already exists with that username
        client_1.prisma.user.findFirst.mockResolvedValue({ id: 99 });
        yield expect((0, user_service_1.editUser)(1, { username: "takenUsername" })).rejects.toThrow("Username already taken");
    }));
    it("should update user when username is unique", () => __awaiter(void 0, void 0, void 0, function* () {
        client_1.prisma.user.findFirst.mockResolvedValue(null);
        const mockUser = {
            id: 1,
            full_name: "New Name",
            username: "newUsername",
            bio: "New bio",
            photo_profile: "photo.jpg",
            background: "bg.jpg",
        };
        client_1.prisma.user.update.mockResolvedValue(mockUser);
        const updated = yield (0, user_service_1.editUser)(1, {
            full_name: "New Name",
            username: "newUsername",
            bio: "New bio",
            photo_profile: "photo.jpg",
            background: "bg.jpg",
        });
        expect(client_1.prisma.user.update).toHaveBeenCalledWith({
            where: { id: 1 },
            data: {
                full_name: "New Name",
                username: "newUsername",
                bio: "New bio",
                photo_profile: "photo.jpg",
                background: "bg.jpg",
            },
        });
        expect(updated).toEqual(mockUser);
    }));
});
