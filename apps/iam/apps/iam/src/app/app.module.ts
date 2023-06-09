import { Global, Module, Provider } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { LoggerModule, RabbitMqWithBodyParser, loggerInterceptor } from '@deepq/nest-logger';
import { ClientRMQwGqlErrors, NestAuthModule } from '@deepq/nest-auth';
import { PrismaModule } from '@zen/nest-api/prisma';

import { environment } from '../environments/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppCaslFactory } from './casl/casl.factory';
import { defaultFieldsProvider } from './casl/default-fields';
import { ConfigModule, ConfigService } from './config';
import { ExceptionMapper } from './filters/exception-mapper.filter';
import { JwtModule } from './jwt';
import { UserModule } from './modules/user/user.module';
import { GoogleOAuthStrategy } from './strategies/google-oauth.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

const oauthProviders: Provider[] = [];
if (environment.oauth?.google?.clientID) oauthProviders.push(GoogleOAuthStrategy);

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
    ClientsModule.registerAsync([
      {
        name: 'MAIL_SERVICE',
        useFactory: (config: ConfigService) => ({
          customClass: ClientRMQwGqlErrors,
          options: {
            transport: Transport.RMQ,
            urls: [config.broker.url],
            queue: 'notifications-queue',
            queueOptions: {
              durable: true,
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
    UserModule,
  ],
  exports: [JwtModule, NestAuthModule, defaultFieldsProvider],
  controllers: [AppController],
  providers: [
    JwtStrategy,
    AppService,
    loggerInterceptor,
    defaultFieldsProvider,
    {
      provide: APP_FILTER,
      useClass: ExceptionMapper,
    },
    ...oauthProviders,
  ],
})
export class AppModule {}
