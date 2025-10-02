/*
  Warnings:

  - You are about to drop the column `created_by` on the `Thread` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `Thread` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_created_by_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_updated_by_fkey";

-- DropForeignKey
ALTER TABLE "Reply" DROP CONSTRAINT "Reply_created_by_fkey";

-- DropForeignKey
ALTER TABLE "Reply" DROP CONSTRAINT "Reply_updated_by_fkey";

-- DropForeignKey
ALTER TABLE "Thread" DROP CONSTRAINT "Thread_created_by_fkey";

-- DropForeignKey
ALTER TABLE "Thread" DROP CONSTRAINT "Thread_updated_by_fkey";

-- AlterTable
ALTER TABLE "Thread" DROP COLUMN "created_by",
DROP COLUMN "updated_by";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "created_by",
DROP COLUMN "updated_by";

-- CreateTable
CREATE TABLE "Rchild" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "thread_id" INTEGER NOT NULL,
    "reply_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER,
    "updated_by" INTEGER,

    CONSTRAINT "Rchild_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rchild" ADD CONSTRAINT "Rchild_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rchild" ADD CONSTRAINT "Rchild_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "Thread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rchild" ADD CONSTRAINT "Rchild_reply_id_fkey" FOREIGN KEY ("reply_id") REFERENCES "Reply"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
