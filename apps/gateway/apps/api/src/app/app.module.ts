import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';

import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { GqlWithBodyParser, LoggerModule, loggerInterceptor } from '@deepq/nest-logger';

import { environment } from '../environments/environment';

@Module({
  imports: [
    LoggerModule.forRoot({
      serviceName: environment.serviceName,
      interceptor: { gql: GqlWithBodyParser },
    }),
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        // ... Apollo server options
        // cors: true,
        context: ({ req }) => {
          if (req && req.headers.authorization) {
            return { authorization: req.headers.authorization };
          }
        },
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'ticket', url: 'http://localhost:7081/graphql' },
          ],
        }),
        buildService: ({ /** name, */ url }) => {
          return new RemoteGraphQLDataSource({
            url,
            willSendRequest({ request, context }) {
              request.http.headers.set('Authorization', context.authorization);
            },
          });
        },
      },
    }),
  ],
  providers: [loggerInterceptor],
})
export class AppModule {}
