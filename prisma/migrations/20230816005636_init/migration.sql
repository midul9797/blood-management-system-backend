-- CreateTable
CREATE TABLE "records" (
    "d_phone" TEXT NOT NULL,
    "p_phone" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "records_d_phone_key" ON "records"("d_phone");

-- CreateIndex
CREATE UNIQUE INDEX "records_p_phone_key" ON "records"("p_phone");

-- AddForeignKey
ALTER TABLE "records" ADD CONSTRAINT "records_d_phone_fkey" FOREIGN KEY ("d_phone") REFERENCES "donors"("phone") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "records" ADD CONSTRAINT "records_p_phone_fkey" FOREIGN KEY ("p_phone") REFERENCES "patients"("phone") ON DELETE RESTRICT ON UPDATE CASCADE;
