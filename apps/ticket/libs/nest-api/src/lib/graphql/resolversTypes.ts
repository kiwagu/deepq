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
  Ticket?: Ticket;
  Query?: Query;
  Mutation?: Mutation;
  AggregateSpot?: AggregateSpot;
  SpotGroupByOutputType?: SpotGroupByOutputType;
  AggregateTicket?: AggregateTicket;
  TicketGroupByOutputType?: TicketGroupByOutputType;
  AffectedRowsOutput?: AffectedRowsOutput;
  SpotCountOutputType?: SpotCountOutputType;
  SpotCountAggregateOutputType?: SpotCountAggregateOutputType;
  SpotMinAggregateOutputType?: SpotMinAggregateOutputType;
  SpotMaxAggregateOutputType?: SpotMaxAggregateOutputType;
  TicketCountAggregateOutputType?: TicketCountAggregateOutputType;
  TicketMinAggregateOutputType?: TicketMinAggregateOutputType;
  TicketMaxAggregateOutputType?: TicketMaxAggregateOutputType;
};

export type Spot = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.Spot, {}, string>;
  title?: Resolver<Client.Spot, {}, string>;
  address?: Resolver<Client.Spot, {}, string | null>;
  createdAt?: Resolver<Client.Spot, {}, Date>;
  tickets?: Resolver<Client.Spot, SpotTicketsArgs, Client.Ticket[] | null>;
  _count?: Resolver<Client.Spot, {}, Client.Prisma.SpotCountOutputType>;
};

export type Ticket = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.Ticket, {}, string>;
  userId?: Resolver<Client.Ticket, {}, string | null>;
  spotId?: Resolver<Client.Ticket, {}, string>;
  createdAt?: Resolver<Client.Ticket, {}, Date>;
  spot?: Resolver<Client.Ticket, {}, Client.Spot>;
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
  findFirstTicket?: Resolver<{}, FindFirstTicketArgs, Client.Ticket | null>;
  findFirstTicketOrThrow?: Resolver<
    {},
    FindFirstTicketOrThrowArgs,
    Client.Ticket | null
  >;
  findManyTicket?: Resolver<{}, FindManyTicketArgs, Client.Ticket[]>;
  findManyTicketCount?: Resolver<{}, FindManyTicketArgs, number>;
  aggregateTicket?: Resolver<
    {},
    AggregateTicketArgs,
    Client.Prisma.GetTicketAggregateType<AggregateTicketArgs>
  >;
  groupByTicket?: Resolver<
    {},
    GroupByTicketArgs,
    Client.Prisma.TicketGroupByOutputType[]
  >;
  findUniqueTicket?: Resolver<{}, FindUniqueTicketArgs, Client.Ticket | null>;
  findUniqueTicketOrThrow?: Resolver<
    {},
    FindUniqueTicketOrThrowArgs,
    Client.Ticket | null
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
  createOneTicket?: Resolver<{}, CreateOneTicketArgs, Client.Ticket>;
  upsertOneTicket?: Resolver<{}, UpsertOneTicketArgs, Client.Ticket>;
  createManyTicket?: Resolver<
    {},
    CreateManyTicketArgs,
    Client.Prisma.BatchPayload
  >;
  deleteOneTicket?: Resolver<{}, DeleteOneTicketArgs, Client.Ticket | null>;
  updateOneTicket?: Resolver<{}, UpdateOneTicketArgs, Client.Ticket | null>;
  updateManyTicket?: Resolver<
    {},
    UpdateManyTicketArgs,
    Client.Prisma.BatchPayload
  >;
  deleteManyTicket?: Resolver<
    {},
    DeleteManyTicketArgs,
    Client.Prisma.BatchPayload
  >;
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

export type AggregateTicket = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateTicket,
    {},
    Client.Prisma.TicketCountAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateTicket,
    {},
    Client.Prisma.TicketMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateTicket,
    {},
    Client.Prisma.TicketMaxAggregateOutputType | null
  >;
};

export type TicketGroupByOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.TicketGroupByOutputType, {}, string>;
  userId?: Resolver<Client.Prisma.TicketGroupByOutputType, {}, string | null>;
  spotId?: Resolver<Client.Prisma.TicketGroupByOutputType, {}, string>;
  createdAt?: Resolver<Client.Prisma.TicketGroupByOutputType, {}, Date>;
  _count?: Resolver<
    Client.Prisma.TicketGroupByOutputType,
    {},
    Client.Prisma.TicketCountAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.TicketGroupByOutputType,
    {},
    Client.Prisma.TicketMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.TicketGroupByOutputType,
    {},
    Client.Prisma.TicketMaxAggregateOutputType | null
  >;
};

export type AffectedRowsOutput = { [key: string]: Resolver<any, any, any> } & {
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>;
};

export type SpotCountOutputType = { [key: string]: Resolver<any, any, any> } & {
  tickets?: Resolver<Client.Prisma.SpotCountOutputType, {}, number>;
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

export type TicketCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.TicketCountAggregateOutputType, {}, number>;
  userId?: Resolver<Client.Prisma.TicketCountAggregateOutputType, {}, number>;
  spotId?: Resolver<Client.Prisma.TicketCountAggregateOutputType, {}, number>;
  createdAt?: Resolver<
    Client.Prisma.TicketCountAggregateOutputType,
    {},
    number
  >;
  _all?: Resolver<Client.Prisma.TicketCountAggregateOutputType, {}, number>;
};

export type TicketMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.TicketMinAggregateOutputType, {}, string | null>;
  userId?: Resolver<
    Client.Prisma.TicketMinAggregateOutputType,
    {},
    string | null
  >;
  spotId?: Resolver<
    Client.Prisma.TicketMinAggregateOutputType,
    {},
    string | null
  >;
  createdAt?: Resolver<
    Client.Prisma.TicketMinAggregateOutputType,
    {},
    Date | null
  >;
};

export type TicketMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.TicketMaxAggregateOutputType, {}, string | null>;
  userId?: Resolver<
    Client.Prisma.TicketMaxAggregateOutputType,
    {},
    string | null
  >;
  spotId?: Resolver<
    Client.Prisma.TicketMaxAggregateOutputType,
    {},
    string | null
  >;
  createdAt?: Resolver<
    Client.Prisma.TicketMaxAggregateOutputType,
    {},
    Date | null
  >;
};

export interface SpotTicketsArgs {
  where?: TicketWhereInput | null;
  orderBy?: TicketOrderByWithRelationInput[] | null;
  cursor?: TicketWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: TicketScalarFieldEnum[] | null;
}

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

export interface FindFirstTicketArgs {
  where?: TicketWhereInput | null;
  orderBy?: TicketOrderByWithRelationInput[] | null;
  cursor?: TicketWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: TicketScalarFieldEnum[] | null;
}

export interface FindFirstTicketOrThrowArgs {
  where?: TicketWhereInput | null;
  orderBy?: TicketOrderByWithRelationInput[] | null;
  cursor?: TicketWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: TicketScalarFieldEnum[] | null;
}

export interface FindManyTicketArgs {
  where?: TicketWhereInput;
  orderBy?: TicketOrderByWithRelationInput[];
  cursor?: TicketWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: TicketScalarFieldEnum[];
}

export interface AggregateTicketArgs {
  where?: TicketWhereInput;
  orderBy?: TicketOrderByWithRelationInput[];
  cursor?: TicketWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.TicketCountAggregateInputType;
  _min?: Client.Prisma.TicketMinAggregateInputType;
  _max?: Client.Prisma.TicketMaxAggregateInputType;
}

export interface GroupByTicketArgs {
  where?: TicketWhereInput;
  orderBy?: TicketOrderByWithAggregationInput[];
  by: TicketScalarFieldEnum[];
  having?: TicketScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface FindUniqueTicketArgs {
  where: TicketWhereUniqueInput | null;
}

export interface FindUniqueTicketOrThrowArgs {
  where: TicketWhereUniqueInput | null;
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

export interface CreateOneTicketArgs {
  data: TicketUncheckedCreateInput;
}

export interface UpsertOneTicketArgs {
  where: TicketWhereUniqueInput;
  create: TicketCreateInput;
  update: TicketUpdateInput;
}

export interface CreateManyTicketArgs {
  data: TicketCreateManyInput;
  skipDuplicates?: boolean;
}

export interface DeleteOneTicketArgs {
  where: TicketWhereUniqueInput | null;
}

export interface UpdateOneTicketArgs {
  data: TicketUpdateInput | null;
  where: TicketWhereUniqueInput | null;
}

export interface UpdateManyTicketArgs {
  data: TicketUpdateManyMutationInput;
  where?: TicketWhereInput;
}

export interface DeleteManyTicketArgs {
  where?: TicketWhereInput;
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
  tickets?: TicketListRelationFilter;
}

export interface SpotOrderByWithRelationInput {
  id?: SortOrder;
  title?: SortOrder;
  address?: SortOrder;
  createdAt?: SortOrder;
  tickets?: TicketOrderByRelationAggregateInput;
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

export interface TicketWhereInput {
  AND?: TicketWhereInput[];
  OR?: TicketWhereInput[];
  NOT?: TicketWhereInput[];
  id?: StringFilter;
  userId?: StringNullableFilter | null;
  spotId?: StringFilter;
  createdAt?: DateTimeFilter;
  spot?: SpotWhereInput;
}

export interface TicketOrderByWithRelationInput {
  id?: SortOrder;
  userId?: SortOrder;
  spotId?: SortOrder;
  createdAt?: SortOrder;
  spot?: SpotOrderByWithRelationInput;
}

export interface TicketWhereUniqueInput {
  id?: string;
}

export interface TicketOrderByWithAggregationInput {
  id?: SortOrder;
  userId?: SortOrder;
  spotId?: SortOrder;
  createdAt?: SortOrder;
  _count?: TicketCountOrderByAggregateInput;
  _max?: TicketMaxOrderByAggregateInput;
  _min?: TicketMinOrderByAggregateInput;
}

export interface TicketScalarWhereWithAggregatesInput {
  AND?: TicketScalarWhereWithAggregatesInput[];
  OR?: TicketScalarWhereWithAggregatesInput[];
  NOT?: TicketScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  userId?: StringNullableWithAggregatesFilter | null;
  spotId?: StringWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
}

export interface SpotCreateInput {
  id?: string;
  title: string;
  address?: string | null;
  createdAt?: Date;
  tickets?: TicketCreateNestedManyWithoutSpotInput;
}

export interface SpotUncheckedCreateInput {
  id?: string;
  title: string;
  address?: string | null;
  createdAt?: Date;
  tickets?: TicketUncheckedCreateNestedManyWithoutSpotInput;
}

export interface SpotUpdateInput {
  id?: string;
  title?: string;
  address?: string | null;
  createdAt?: Date;
  tickets?: TicketUpdateManyWithoutSpotNestedInput;
}

export interface SpotUncheckedUpdateInput {
  id?: string;
  title?: string;
  address?: string | null;
  createdAt?: Date;
  tickets?: TicketUncheckedUpdateManyWithoutSpotNestedInput;
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

export interface TicketCreateInput {
  id?: string;
  createdAt?: Date;
  spot: SpotCreateNestedOneWithoutTicketsInput;
}

export interface TicketUncheckedCreateInput {
  id?: string;
  userId?: string | null;
  spotId: string;
  createdAt?: Date;
}

export interface TicketUpdateInput {
  id?: string;
  createdAt?: Date;
  spot?: SpotUpdateOneRequiredWithoutTicketsNestedInput;
}

export interface TicketUncheckedUpdateInput {
  id?: string;
  userId?: string | null;
  spotId?: string;
  createdAt?: Date;
}

export interface TicketCreateManyInput {
  id?: string;
  userId?: string | null;
  spotId: string;
  createdAt?: Date;
}

export interface TicketUpdateManyMutationInput {
  id?: string;
  createdAt?: Date;
}

export interface TicketUncheckedUpdateManyInput {
  id?: string;
  userId?: string | null;
  spotId?: string;
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

export interface TicketListRelationFilter {
  every?: TicketWhereInput;
  some?: TicketWhereInput;
  none?: TicketWhereInput;
}

export interface TicketOrderByRelationAggregateInput {
  _count?: SortOrder;
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

export interface SpotRelationFilter {
  is?: SpotWhereInput;
  isNot?: SpotWhereInput;
}

export interface TicketCountOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  spotId?: SortOrder;
  createdAt?: SortOrder;
}

export interface TicketMaxOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  spotId?: SortOrder;
  createdAt?: SortOrder;
}

export interface TicketMinOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  spotId?: SortOrder;
  createdAt?: SortOrder;
}

export interface TicketCreateNestedManyWithoutSpotInput {
  create?: TicketCreateWithoutSpotInput[];
  connectOrCreate?: TicketCreateOrConnectWithoutSpotInput[];
  createMany?: TicketCreateManySpotInputEnvelope;
  connect?: TicketWhereUniqueInput[];
}

export interface TicketUncheckedCreateNestedManyWithoutSpotInput {
  create?: TicketCreateWithoutSpotInput[];
  connectOrCreate?: TicketCreateOrConnectWithoutSpotInput[];
  createMany?: TicketCreateManySpotInputEnvelope;
  connect?: TicketWhereUniqueInput[];
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

export interface TicketUpdateManyWithoutSpotNestedInput {
  create?: TicketCreateWithoutSpotInput[];
  connectOrCreate?: TicketCreateOrConnectWithoutSpotInput[];
  upsert?: TicketUpsertWithWhereUniqueWithoutSpotInput[];
  createMany?: TicketCreateManySpotInputEnvelope;
  set?: TicketWhereUniqueInput[];
  disconnect?: TicketWhereUniqueInput[];
  delete?: TicketWhereUniqueInput[];
  connect?: TicketWhereUniqueInput[];
  update?: TicketUpdateWithWhereUniqueWithoutSpotInput[];
  updateMany?: TicketUpdateManyWithWhereWithoutSpotInput[];
  deleteMany?: TicketScalarWhereInput[];
}

export interface TicketUncheckedUpdateManyWithoutSpotNestedInput {
  create?: TicketCreateWithoutSpotInput[];
  connectOrCreate?: TicketCreateOrConnectWithoutSpotInput[];
  upsert?: TicketUpsertWithWhereUniqueWithoutSpotInput[];
  createMany?: TicketCreateManySpotInputEnvelope;
  set?: TicketWhereUniqueInput[];
  disconnect?: TicketWhereUniqueInput[];
  delete?: TicketWhereUniqueInput[];
  connect?: TicketWhereUniqueInput[];
  update?: TicketUpdateWithWhereUniqueWithoutSpotInput[];
  updateMany?: TicketUpdateManyWithWhereWithoutSpotInput[];
  deleteMany?: TicketScalarWhereInput[];
}

export interface SpotCreateNestedOneWithoutTicketsInput {
  create?: SpotUncheckedCreateWithoutTicketsInput;
  connectOrCreate?: SpotCreateOrConnectWithoutTicketsInput;
  connect?: SpotWhereUniqueInput;
}

export interface SpotUpdateOneRequiredWithoutTicketsNestedInput {
  create?: SpotUncheckedCreateWithoutTicketsInput;
  connectOrCreate?: SpotCreateOrConnectWithoutTicketsInput;
  upsert?: SpotUpsertWithoutTicketsInput;
  connect?: SpotWhereUniqueInput;
  update?: SpotUncheckedUpdateWithoutTicketsInput;
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

export interface TicketCreateWithoutSpotInput {
  id?: string;
  createdAt?: Date;
}

export interface TicketUncheckedCreateWithoutSpotInput {
  id?: string;
  userId?: string | null;
  createdAt?: Date;
}

export interface TicketCreateOrConnectWithoutSpotInput {
  where: TicketWhereUniqueInput;
  create: TicketUncheckedCreateWithoutSpotInput;
}

export interface TicketCreateManySpotInputEnvelope {
  data: TicketCreateManySpotInput[];
  skipDuplicates?: boolean;
}

export interface TicketUpsertWithWhereUniqueWithoutSpotInput {
  where: TicketWhereUniqueInput;
  update: TicketUncheckedUpdateWithoutSpotInput;
  create: TicketUncheckedCreateWithoutSpotInput;
}

export interface TicketUpdateWithWhereUniqueWithoutSpotInput {
  where: TicketWhereUniqueInput;
  data: TicketUncheckedUpdateWithoutSpotInput;
}

export interface TicketUpdateManyWithWhereWithoutSpotInput {
  where: TicketScalarWhereInput;
  data: TicketUncheckedUpdateManyWithoutTicketsInput;
}

export interface TicketScalarWhereInput {
  AND?: TicketScalarWhereInput[];
  OR?: TicketScalarWhereInput[];
  NOT?: TicketScalarWhereInput[];
  id?: StringFilter;
  userId?: StringNullableFilter | null;
  spotId?: StringFilter;
  createdAt?: DateTimeFilter;
}

export interface SpotCreateWithoutTicketsInput {
  id?: string;
  title: string;
  address?: string | null;
  createdAt?: Date;
}

export interface SpotUncheckedCreateWithoutTicketsInput {
  id?: string;
  title: string;
  address?: string | null;
  createdAt?: Date;
}

export interface SpotCreateOrConnectWithoutTicketsInput {
  where: SpotWhereUniqueInput;
  create: SpotUncheckedCreateWithoutTicketsInput;
}

export interface SpotUpsertWithoutTicketsInput {
  update: SpotUncheckedUpdateWithoutTicketsInput;
  create: SpotUncheckedCreateWithoutTicketsInput;
}

export interface SpotUpdateWithoutTicketsInput {
  id?: string;
  title?: string;
  address?: string | null;
  createdAt?: Date;
}

export interface SpotUncheckedUpdateWithoutTicketsInput {
  id?: string;
  title?: string;
  address?: string | null;
  createdAt?: Date;
}

export interface TicketCreateManySpotInput {
  id?: string;
  userId?: string | null;
  createdAt?: Date;
}

export interface TicketUpdateWithoutSpotInput {
  id?: string;
  createdAt?: Date;
}

export interface TicketUncheckedUpdateWithoutSpotInput {
  id?: string;
  userId?: string | null;
  createdAt?: Date;
}

export interface TicketUncheckedUpdateManyWithoutTicketsInput {
  id?: string;
  userId?: string | null;
  createdAt?: Date;
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
export enum TicketScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  spotId = 'spotId',
  createdAt = 'createdAt',
}
export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}
