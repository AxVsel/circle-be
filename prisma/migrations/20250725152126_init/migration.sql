/*
  Warnings:

  - You are about to drop the column `created_by` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `Rchild` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `Rchild` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `Reply` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `Reply` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Like" DROP COLUMN "created_by",
DROP COLUMN "updated_by";

-- AlterTable
ALTER TABLE "Rchild" DROP COLUMN "created_by",
DROP COLUMN "updated_by";

-- AlterTable
ALTER TABLE "Reply" DROP COLUMN "created_by",
DROP COLUMN "updated_by";
