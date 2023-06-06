import { NestFactory } from '@nestjs/core';

import { LoggerService } from '@deepq/nest-logger';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: environment.cors,
    bufferLogs: true,
  });
  const logger = app.get(LoggerService, { strict: false });

  app.useLogger(logger);

  const port = process.env.PORT || environment.expressPort;

  await app.listen(port, () => {
    logger.log(`GraphQL gateway running at http://localhost:${port}/graphql`);
  });
}

bootstrap();
