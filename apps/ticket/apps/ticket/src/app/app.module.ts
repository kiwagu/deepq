import { Global, Module, Provider } from '@nestjs/common';

import { LoggerModule, RabbitMqWithBodyParser, loggerInterceptor } from '@deepq/nest-logger';
import { NestAuthModule } from '@zen/nest-auth';
import { PrismaModule } from '@zen/nest-api/prisma';

import { environment } from '../environments/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppCaslFactory } from './casl/casl.factory';
import { defaultFieldsProvider } from './casl/default-fields';
import { ConfigModule } from './config';
import { JwtModule } from './jwt';
import { SpotModule } from './modules/spot/spot.module';
import { JwtStrategy } from './strategies/jwt.strategy';

const oauthProviders: Provider[] = [];

@Global()
@Module({
  imports: [
    ConfigModule,
    LoggerModule.forRoot({
      serviceName: environment.serviceName,
      interceptor: { rpc: RabbitMqWithBodyParser },
    }),
    PrismaModule,
    NestAuthModule.register(AppCaslFactory),
    JwtModule,
    SpotModule,
  ],
  exports: [JwtModule, NestAuthModule, defaultFieldsProvider],
  controllers: [AppController],
  providers: [JwtStrategy, AppService, loggerInterceptor, defaultFieldsProvider, ...oauthProviders],
})
export class AppModule {}
