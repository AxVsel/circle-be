-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_reply_id_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_thread_id_fkey";

-- AlterTable
ALTER TABLE "Like" ALTER COLUMN "thread_id" DROP NOT NULL,
ALTER COLUMN "reply_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "Thread"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_reply_id_fkey" FOREIGN KEY ("reply_id") REFERENCES "Reply"("id") ON DELETE SET NULL ON UPDATE CASCADE;
