import { Request } from 'express';
import { ClsModule } from 'nestjs-cls';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ThrottlerModule } from '@nestjs/throttler';

import { ClientRMQExt, NestAuthModule } from '@zen/nest-auth';
import {
  GqlWithBodyParser,
  LoggerModule,
  loggerInterceptor,
} from '@zen/logger';
import { PrismaModule } from '@zen/nest-api/prisma';
import { JwtModule } from './jwt';

import { environment } from '../environments/environment';
import { ConfigModule, ConfigService } from './config';
import { ToolsController } from './controllers';
import { TicketGraphQLModule } from './graphql';
import { AppCaslFactory } from './casl/casl.factory';
import { JwtStrategy } from './strategies/jwt.strategy';

@Global()
@Module({
  imports: [
    ClsModule.forRoot({
      global: true,
      middleware: {
        mount: true,
        setup: (cls, req: Request) => {
          // Put the jwt token to every request to store
          cls.set('token', req.header('Authorization'));
        },
      },
    }),
    LoggerModule.forRoot({
      serviceName: environment.serviceName,
      interceptor: { gql: GqlWithBodyParser },
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.throttle,
    }),
    JwtModule,
    ConfigModule,
    NestAuthModule.register(AppCaslFactory),
    TicketGraphQLModule,
    ClientsModule.registerAsync([
      {
        name: 'IAM_SERVICE',
        useFactory: (config: ConfigService) => ({
          customClass: ClientRMQExt,
          transport: Transport.RMQ,
          options: {
            urls: [config.broker.url],
            queue: 'iam-queue',
            queueOptions: {
              durable: true,
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
    PrismaModule,
  ],
  controllers: [ToolsController],
  providers: [JwtStrategy, loggerInterceptor],
  exports: [JwtModule, ClientsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(graphqlUploadExpress(environment.graphql.uploads))
      .forRoutes('graphql');
  }
}
