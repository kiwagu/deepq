import './tracing';

import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

import { LoggerService } from '@deepq/nest-logger';
import { PrismaService } from '@zen/nest-api/prisma';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: environment.cors, bufferLogs: true });
  const logger = app.get(LoggerService, { strict: false });

  app.useLogger(logger);

  const prisma: PrismaService = app.get(PrismaService);
  prisma.enableShutdownHooks(app);

  if (environment.production) app.use(helmet());

  const port = process.env.PORT || environment.expressPort;

  await app.listen(port, () => {
    logger.log(`IAM GraphQL server running at http://localhost:${port}/graphql`);
  });
}

bootstrap();
