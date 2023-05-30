-- CreateEnum
CREATE TYPE "ticket"."TicketStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'SUCCESS', 'REJECT', 'WAIT_TIMEOUT');

-- AlterTable
ALTER TABLE "ticket"."Ticket" ADD COLUMN     "status" "ticket"."TicketStatus" NOT NULL DEFAULT 'OPEN',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "Ticket_status_idx" ON "ticket"."Ticket"("status");
