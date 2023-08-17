-- CreateTable
CREATE TABLE "patients" (
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "address" TEXT,
    "bloodGroup" TEXT NOT NULL,
    "healthStatus" TEXT,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("phone")
);

-- CreateIndex
CREATE UNIQUE INDEX "patients_phone_key" ON "patients"("phone");
