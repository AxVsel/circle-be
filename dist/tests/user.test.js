"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Wajib sebelum import service atau prisma
jest.mock("../prisma/client"); // Akan mengambil dari __mocks__/client.ts
const client_1 = require("../prisma/client");
const user_service_1 = require("../services/user-service");
describe("editUser", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should throw an error if username is taken by another user", async () => {
        // Mock user already exists with that username
        client_1.prisma.user.findFirst.mockResolvedValue({ id: 99 });
        await expect((0, user_service_1.editUser)(1, { username: "takenUsername" })).rejects.toThrow("Username already taken");
    });
    it("should update user when username is unique", async () => {
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
        const updated = await (0, user_service_1.editUser)(1, {
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
    });
});
