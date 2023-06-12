
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import {
  GqlWithBodyParser,
  LoggerModule,
  loggerInterceptor,
} from '@deepq/nest-logger';

import { environment } from '../environments/environment';
import { GqlConfigService } from './gql-config.service';
import { ConfigModule } from './config';

@Module({
  imports: [
    LoggerModule.forRoot({
      serviceName: environment.serviceName,
      interceptor: { gql: GqlWithBodyParser },
    }),
    GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      useClass: GqlConfigService,
      imports: [ConfigModule],
    }),
  ],
  providers: [loggerInterceptor],
})
export class AppModule {}
