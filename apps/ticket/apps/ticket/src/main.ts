import './tracing';

import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';
import { LoggerService } from '@deepq/nest-logger';
import { ConfigModule, ConfigService } from './app/config';
import { ErrorsInterceptor } from './app/interceptors/rpc-exception.interceptor';

async function bootstrap() {
  const config = await NestFactory.createApplicationContext(ConfigModule);
  const configService = config.get<ConfigService>(ConfigService);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [configService.broker.url],
      queue: 'ticket-queue',
      queueOptions: {
        durable: true,
      },
    },
    bufferLogs: true,
  });
  const logger = app.get(LoggerService, { strict: false });

  app.useLogger(logger);
  app.useGlobalInterceptors(new ErrorsInterceptor());

  await config.close();
  await app.listen();

  logger.log(`🚀 Ticket service is running`);
}

bootstrap();
