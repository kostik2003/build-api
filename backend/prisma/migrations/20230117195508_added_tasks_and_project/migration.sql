/*
  Warnings:

  - You are about to drop the column `discription` on the `Tracking` table. All the data in the column will be lost.
  - You are about to drop the column `gitSourse` on the `Tracking` table. All the data in the column will be lost.
  - You are about to drop the column `reworked` on the `Tracking` table. All the data in the column will be lost.
  - You are about to drop the column `target` on the `Tracking` table. All the data in the column will be lost.
  - You are about to drop the column `workTime` on the `Tracking` table. All the data in the column will be lost.
  - Added the required column `discriptionTrack` to the `Tracking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectName` to the `Tracking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tracking" DROP COLUMN "discription",
DROP COLUMN "gitSourse",
DROP COLUMN "reworked",
DROP COLUMN "target",
DROP COLUMN "workTime",
ADD COLUMN     "discriptionTrack" TEXT NOT NULL,
ADD COLUMN     "projectName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "discriptionTask" TEXT NOT NULL,
    "time" TEXT,
    "isComplite" TEXT NOT NULL,
    "taskUser" INTEGER NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectUsers" (
    "projectName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectUsers_projectName_key" ON "ProjectUsers"("projectName");

-- AddForeignKey
ALTER TABLE "Tracking" ADD CONSTRAINT "Tracking_projectName_fkey" FOREIGN KEY ("projectName") REFERENCES "Project"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_taskUser_fkey" FOREIGN KEY ("taskUser") REFERENCES "Tracking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectUsers" ADD CONSTRAINT "ProjectUsers_projectName_fkey" FOREIGN KEY ("projectName") REFERENCES "Project"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectUsers" ADD CONSTRAINT "ProjectUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
