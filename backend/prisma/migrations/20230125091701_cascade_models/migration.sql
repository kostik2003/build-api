-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_taskUser_fkey";

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_taskUser_fkey" FOREIGN KEY ("taskUser") REFERENCES "Tracking"("id") ON DELETE CASCADE ON UPDATE CASCADE;
