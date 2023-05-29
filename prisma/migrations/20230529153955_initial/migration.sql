-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "iam";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "ticket";

-- CreateTable
CREATE TABLE "iam"."User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT,
    "password" TEXT,
    "email" TEXT NOT NULL,
    "roles" TEXT[],
    "rules" JSONB[],
    "googleId" TEXT,
    "googleProfile" JSONB,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket"."Spot" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Spot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket"."Ticket" (
    "id" TEXT NOT NULL,
    "userId" VARCHAR(255),
    "spotId" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "iam"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "iam"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "iam"."User"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "Spot_title_key" ON "ticket"."Spot"("title");

-- CreateIndex
CREATE INDEX "Ticket_userId_idx" ON "ticket"."Ticket"("userId");

-- CreateIndex
CREATE INDEX "Ticket_spotId_idx" ON "ticket"."Ticket"("spotId");

-- AddForeignKey
ALTER TABLE "ticket"."Ticket" ADD CONSTRAINT "Ticket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "iam"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket"."Ticket" ADD CONSTRAINT "Ticket_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "ticket"."Spot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
