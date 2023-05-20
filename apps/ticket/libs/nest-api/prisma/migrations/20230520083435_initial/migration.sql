-- CreateTable
CREATE TABLE "Spot" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Spot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Spot_title_key" ON "Spot"("title");
