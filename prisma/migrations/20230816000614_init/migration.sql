/*
  Warnings:

  - You are about to drop the `Donors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Donors";

-- CreateTable
CREATE TABLE "donors" (
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "address" TEXT,
    "bloodGroup" TEXT NOT NULL,
    "healthStatus" TEXT,

    CONSTRAINT "donors_pkey" PRIMARY KEY ("phone")
);

-- CreateIndex
CREATE UNIQUE INDEX "donors_phone_key" ON "donors"("phone");
