import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';

import { ApolloServerPlugin } from '@apollo/server';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { print } from 'graphql';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

import { ConfigService } from '../config';
import { IContext } from './models';
import { ALL_TYPE_DEFS } from './resolvers';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  createGqlOptions(): ApolloDriverConfig {
    const plugins: ApolloServerPlugin[] = [];
    if (this.config.graphql.sandbox && !this.config.production)
      plugins.push(ApolloServerPluginLandingPageLocalDefault());
    if (this.config.graphql.sandbox && this.config.production)
      plugins.push(ApolloServerPluginLandingPageProductionDefault());

    return {
      typeDefs: print(ALL_TYPE_DEFS),
      resolvers: { Upload: GraphQLUpload },
      playground: false,
      plugins,
      introspection: !!this.config.graphql.introspection,
      allowBatchedHttpRequests: true,
      csrfPrevention: this.config.graphql.csrfPrevention,
      cache: 'bounded',
      context: (ctx: any): IContext => {
        // Queries, Mutations
        return ctx;
      },
    };
  }
}
