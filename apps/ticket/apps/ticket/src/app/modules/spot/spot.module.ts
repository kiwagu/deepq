import { Module } from '@nestjs/common';

import { PrismaModule } from '@zen/nest-api/prisma';

import { SpotController } from './spot.controller';
import { AppCaslFactory } from '../../casl/casl.factory';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [SpotController],
  providers: [AppCaslFactory],
})
export class SpotModule {}
