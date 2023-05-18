// This file is generated automatically. Do not edit it manually.
import { mergeTypeDefs } from '@graphql-tools/merge';
import { DocumentNode } from 'graphql';

import PALJS_TYPE_DEFS from '@zen/nest-api/graphql/paljs/typeDefs';

import { typeDefs as GlobalTypeDefs } from '../global-schema.gql';
import { SpotResolver, typeDefs as SpotTypeDefs } from './Spot';

export const NEST_RESOLVERS = [
  SpotResolver
];

export const NEST_TYPE_DEFS = [
  SpotTypeDefs
].filter(x => x) as DocumentNode[];

export const ALL_TYPE_DEFS = mergeTypeDefs([GlobalTypeDefs, PALJS_TYPE_DEFS, ...NEST_TYPE_DEFS]);
