-- CreateTable
CREATE TABLE "Donors" (
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "address" TEXT,
    "bloodGroup" TEXT NOT NULL,
    "healthStatus" TEXT,

    CONSTRAINT "Donors_pkey" PRIMARY KEY ("phone")
);

-- CreateIndex
CREATE UNIQUE INDEX "Donors_phone_key" ON "Donors"("phone");
