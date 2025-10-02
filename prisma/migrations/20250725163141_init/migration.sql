/*
  Warnings:

  - Made the column `number_of_replies` on table `Thread` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Thread" ALTER COLUMN "number_of_replies" SET NOT NULL,
ALTER COLUMN "number_of_replies" SET DEFAULT 0;
