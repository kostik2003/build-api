/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Time` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Time";

-- CreateTable
CREATE TABLE "Tracking" (
    "id" SERIAL NOT NULL,
    "calendare" TIMESTAMP(3) NOT NULL,
    "discription" TEXT NOT NULL,
    "gitSourse" TEXT NOT NULL,
    "nextDayDiscription" TEXT,
    "reworked" TEXT,
    "target" TEXT NOT NULL,
    "workTime" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Tracking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tracking" ADD CONSTRAINT "Tracking_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
