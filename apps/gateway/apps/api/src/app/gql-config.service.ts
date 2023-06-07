import { ApolloServerPlugin } from '@apollo/server';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';

import { ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';

import { ConfigService } from './config';
import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';

@Injectable()
export class GqlConfigService
  implements GqlOptionsFactory<ApolloGatewayDriverConfig>
{
  constructor(private readonly config: ConfigService) {}

  createGqlOptions(): ApolloGatewayDriverConfig {
    const plugins: ApolloServerPlugin[] = [];
    if (this.config.graphql.sandbox && !this.config.production)
      plugins.push(ApolloServerPluginLandingPageLocalDefault());
    if (this.config.graphql.sandbox && this.config.production)
      plugins.push(ApolloServerPluginLandingPageProductionDefault());

    return {
      server: {
        playground: false,
        plugins,
        introspection: !!this.config.graphql.introspection,
        allowBatchedHttpRequests: true,
        csrfPrevention: this.config.graphql.csrfPrevention,
        cache: 'bounded',
        context: ({ req }) => {
          if (req && req.headers.authorization) {
            return { authorization: req.headers.authorization };
          }
        },
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [{ name: 'ticket', url: 'http://localhost:7081/graphql' }],
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
    };
  }
}
