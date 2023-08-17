/*
  Warnings:

  - You are about to drop the column `lastGiven` on the `patients` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "donors" ADD COLUMN     "lastGiven" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "patients" DROP COLUMN "lastGiven";
