/*
  Warnings:

  - You are about to drop the column `authorId` on the `Tracking` table. All the data in the column will be lost.
  - Added the required column `authorEmail` to the `Tracking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tracking" DROP CONSTRAINT "Tracking_authorId_fkey";

-- AlterTable
ALTER TABLE "Tracking" DROP COLUMN "authorId",
ADD COLUMN     "authorEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Tracking" ADD CONSTRAINT "Tracking_authorEmail_fkey" FOREIGN KEY ("authorEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
