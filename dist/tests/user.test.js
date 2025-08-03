// Wajib sebelum import service atau prisma
jest.mock("../prisma/client"); // Akan mengambil dari __mocks__/client.ts
import { prisma } from "../prisma/client";
import { editUser } from "../services/user-service";
describe("editUser", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should throw an error if username is taken by another user", async () => {
        // Mock user already exists with that username
        prisma.user.findFirst.mockResolvedValue({ id: 99 });
        await expect(editUser(1, { username: "takenUsername" })).rejects.toThrow("Username already taken");
    });
    it("should update user when username is unique", async () => {
        prisma.user.findFirst.mockResolvedValue(null);
        const mockUser = {
            id: 1,
            full_name: "New Name",
            username: "newUsername",
            bio: "New bio",
            photo_profile: "photo.jpg",
            background: "bg.jpg",
        };
        prisma.user.update.mockResolvedValue(mockUser);
        const updated = await editUser(1, {
            full_name: "New Name",
            username: "newUsername",
            bio: "New bio",
            photo_profile: "photo.jpg",
            background: "bg.jpg",
        });
        expect(prisma.user.update).toHaveBeenCalledWith({
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
