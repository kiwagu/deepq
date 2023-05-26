import { Module } from '@nestjs/common';

import { PrismaModule } from '@zen/nest-api/prisma';

import { TicketController } from './ticket.controller';
import { AppCaslFactory } from '../../casl/casl.factory';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [TicketController],
  providers: [AppCaslFactory],
})
export class TicketModule {}
