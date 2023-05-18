import * as Client from '../prisma';

import { Context } from './context';

import { GraphQLResolveInfo } from 'graphql';

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<R>;

export type Resolvers = {
  [key: string]: { [key: string]: Resolver<any, any, any> };
} & {
  Spot?: Spot;
  Query?: Query;
  Mutation?: Mutation;
  AggregateSpot?: AggregateSpot;
  SpotGroupByOutputType?: SpotGroupByOutputType;
  AffectedRowsOutput?: AffectedRowsOutput;
  SpotCountAggregateOutputType?: SpotCountAggregateOutputType;
  SpotMinAggregateOutputType?: SpotMinAggregateOutputType;
  SpotMaxAggregateOutputType?: SpotMaxAggregateOutputType;
};

export type Spot = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.Spot, {}, string>;
  title?: Resolver<Client.Spot, {}, string>;
  address?: Resolver<Client.Spot, {}, string | null>;
  createdAt?: Resolver<Client.Spot, {}, Date>;
};

export type Query = { [key: string]: Resolver<any, any, any> } & {
  findFirstSpot?: Resolver<{}, FindFirstSpotArgs, Client.Spot | null>;
  findFirstSpotOrThrow?: Resolver<
    {},
    FindFirstSpotOrThrowArgs,
    Client.Spot | null
  >;
  findManySpot?: Resolver<{}, FindManySpotArgs, Client.Spot[]>;
  findManySpotCount?: Resolver<{}, FindManySpotArgs, number>;
  aggregateSpot?: Resolver<
    {},
    AggregateSpotArgs,
    Client.Prisma.GetSpotAggregateType<AggregateSpotArgs>
  >;
  groupBySpot?: Resolver<
    {},
    GroupBySpotArgs,
    Client.Prisma.SpotGroupByOutputType[]
  >;
  findUniqueSpot?: Resolver<{}, FindUniqueSpotArgs, Client.Spot | null>;
  findUniqueSpotOrThrow?: Resolver<
    {},
    FindUniqueSpotOrThrowArgs,
    Client.Spot | null
  >;
};

export type Mutation = { [key: string]: Resolver<any, any, any> } & {
  createOneSpot?: Resolver<{}, CreateOneSpotArgs, Client.Spot>;
  upsertOneSpot?: Resolver<{}, UpsertOneSpotArgs, Client.Spot>;
  createManySpot?: Resolver<{}, CreateManySpotArgs, Client.Prisma.BatchPayload>;
  deleteOneSpot?: Resolver<{}, DeleteOneSpotArgs, Client.Spot | null>;
  updateOneSpot?: Resolver<{}, UpdateOneSpotArgs, Client.Spot | null>;
  updateManySpot?: Resolver<{}, UpdateManySpotArgs, Client.Prisma.BatchPayload>;
  deleteManySpot?: Resolver<{}, DeleteManySpotArgs, Client.Prisma.BatchPayload>;
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>;
  queryRaw?: Resolver<{}, QueryRawArgs, any>;
};

export type AggregateSpot = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateSpot,
    {},
    Client.Prisma.SpotCountAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateSpot,
    {},
    Client.Prisma.SpotMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateSpot,
    {},
    Client.Prisma.SpotMaxAggregateOutputType | null
  >;
};

export type SpotGroupByOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.SpotGroupByOutputType, {}, string>;
  title?: Resolver<Client.Prisma.SpotGroupByOutputType, {}, string>;
  address?: Resolver<Client.Prisma.SpotGroupByOutputType, {}, string | null>;
  createdAt?: Resolver<Client.Prisma.SpotGroupByOutputType, {}, Date>;
  _count?: Resolver<
    Client.Prisma.SpotGroupByOutputType,
    {},
    Client.Prisma.SpotCountAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.SpotGroupByOutputType,
    {},
    Client.Prisma.SpotMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.SpotGroupByOutputType,
    {},
    Client.Prisma.SpotMaxAggregateOutputType | null
  >;
};

export type AffectedRowsOutput = { [key: string]: Resolver<any, any, any> } & {
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>;
};

export type SpotCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.SpotCountAggregateOutputType, {}, number>;
  title?: Resolver<Client.Prisma.SpotCountAggregateOutputType, {}, number>;
  address?: Resolver<Client.Prisma.SpotCountAggregateOutputType, {}, number>;
  createdAt?: Resolver<Client.Prisma.SpotCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.SpotCountAggregateOutputType, {}, number>;
};

export type SpotMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.SpotMinAggregateOutputType, {}, string | null>;
  title?: Resolver<Client.Prisma.SpotMinAggregateOutputType, {}, string | null>;
  address?: Resolver<
    Client.Prisma.SpotMinAggregateOutputType,
    {},
    string | null
  >;
  createdAt?: Resolver<
    Client.Prisma.SpotMinAggregateOutputType,
    {},
    Date | null
  >;
};

export type SpotMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.SpotMaxAggregateOutputType, {}, string | null>;
  title?: Resolver<Client.Prisma.SpotMaxAggregateOutputType, {}, string | null>;
  address?: Resolver<
    Client.Prisma.SpotMaxAggregateOutputType,
    {},
    string | null
  >;
  createdAt?: Resolver<
    Client.Prisma.SpotMaxAggregateOutputType,
    {},
    Date | null
  >;
};

export interface FindFirstSpotArgs {
  where?: SpotWhereInput | null;
  orderBy?: SpotOrderByWithRelationInput[] | null;
  cursor?: SpotWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: SpotScalarFieldEnum[] | null;
}

export interface FindFirstSpotOrThrowArgs {
  where?: SpotWhereInput | null;
  orderBy?: SpotOrderByWithRelationInput[] | null;
  cursor?: SpotWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: SpotScalarFieldEnum[] | null;
}

export interface FindManySpotArgs {
  where?: SpotWhereInput;
  orderBy?: SpotOrderByWithRelationInput[];
  cursor?: SpotWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: SpotScalarFieldEnum[];
}

export interface AggregateSpotArgs {
  where?: SpotWhereInput;
  orderBy?: SpotOrderByWithRelationInput[];
  cursor?: SpotWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.SpotCountAggregateInputType;
  _min?: Client.Prisma.SpotMinAggregateInputType;
  _max?: Client.Prisma.SpotMaxAggregateInputType;
}

export interface GroupBySpotArgs {
  where?: SpotWhereInput;
  orderBy?: SpotOrderByWithAggregationInput[];
  by: SpotScalarFieldEnum[];
  having?: SpotScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface FindUniqueSpotArgs {
  where: SpotWhereUniqueInput | null;
}

export interface FindUniqueSpotOrThrowArgs {
  where: SpotWhereUniqueInput | null;
}

export interface CreateOneSpotArgs {
  data: SpotCreateInput;
}

export interface UpsertOneSpotArgs {
  where: SpotWhereUniqueInput;
  create: SpotCreateInput;
  update: SpotUpdateInput;
}

export interface CreateManySpotArgs {
  data: SpotCreateManyInput;
  skipDuplicates?: boolean;
}

export interface DeleteOneSpotArgs {
  where: SpotWhereUniqueInput | null;
}

export interface UpdateOneSpotArgs {
  data: SpotUpdateInput | null;
  where: SpotWhereUniqueInput | null;
}

export interface UpdateManySpotArgs {
  data: SpotUpdateManyMutationInput;
  where?: SpotWhereInput;
}

export interface DeleteManySpotArgs {
  where?: SpotWhereInput;
}

export interface ExecuteRawArgs {
  query: string;
  parameters?: any;
}

export interface QueryRawArgs {
  query: string;
  parameters?: any;
}

export interface SpotWhereInput {
  AND?: SpotWhereInput[];
  OR?: SpotWhereInput[];
  NOT?: SpotWhereInput[];
  id?: StringFilter;
  title?: StringFilter;
  address?: StringNullableFilter | null;
  createdAt?: DateTimeFilter;
}

export interface SpotOrderByWithRelationInput {
  id?: SortOrder;
  title?: SortOrder;
  address?: SortOrder;
  createdAt?: SortOrder;
}

export interface SpotWhereUniqueInput {
  id?: string;
  title?: string;
}

export interface SpotOrderByWithAggregationInput {
  id?: SortOrder;
  title?: SortOrder;
  address?: SortOrder;
  createdAt?: SortOrder;
  _count?: SpotCountOrderByAggregateInput;
  _max?: SpotMaxOrderByAggregateInput;
  _min?: SpotMinOrderByAggregateInput;
}

export interface SpotScalarWhereWithAggregatesInput {
  AND?: SpotScalarWhereWithAggregatesInput[];
  OR?: SpotScalarWhereWithAggregatesInput[];
  NOT?: SpotScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  title?: StringWithAggregatesFilter;
  address?: StringNullableWithAggregatesFilter | null;
  createdAt?: DateTimeWithAggregatesFilter;
}

export interface SpotCreateInput {
  id?: string;
  title: string;
  address?: string | null;
  createdAt?: Date;
}

export interface SpotUncheckedCreateInput {
  id?: string;
  title: string;
  address?: string | null;
  createdAt?: Date;
}

export interface SpotUpdateInput {
  id?: string;
  title?: string;
  address?: string | null;
  createdAt?: Date;
}

export interface SpotUncheckedUpdateInput {
  id?: string;
  title?: string;
  address?: string | null;
  createdAt?: Date;
}

export interface SpotCreateManyInput {
  id?: string;
  title: string;
  address?: string | null;
  createdAt?: Date;
}

export interface SpotUpdateManyMutationInput {
  id?: string;
  title?: string;
  address?: string | null;
  createdAt?: Date;
}

export interface SpotUncheckedUpdateManyInput {
  id?: string;
  title?: string;
  address?: string | null;
  createdAt?: Date;
}

export interface StringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringFilter;
}

export interface StringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableFilter | null;
}

export interface DateTimeFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeFilter;
}

export interface SpotCountOrderByAggregateInput {
  id?: SortOrder;
  title?: SortOrder;
  address?: SortOrder;
  createdAt?: SortOrder;
}

export interface SpotMaxOrderByAggregateInput {
  id?: SortOrder;
  title?: SortOrder;
  address?: SortOrder;
  createdAt?: SortOrder;
}

export interface SpotMinOrderByAggregateInput {
  id?: SortOrder;
  title?: SortOrder;
  address?: SortOrder;
  createdAt?: SortOrder;
}

export interface StringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface StringNullableWithAggregatesFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface DateTimeWithAggregatesFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface StringFieldUpdateOperationsInput {
  set?: string;
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null;
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Date;
}

export interface NestedStringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringFilter;
}

export interface NestedStringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableFilter | null;
}

export interface NestedDateTimeFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeFilter;
}

export interface NestedStringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface NestedIntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface NestedIntNullableFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter | null;
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum SpotScalarFieldEnum {
  id = 'id',
  title = 'title',
  address = 'address',
  createdAt = 'createdAt',
}
export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}
