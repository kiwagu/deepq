import { GraphQLResolveInfo } from 'graphql';

import { Inject, UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';

import type { NonNullableFields } from '@zen/common';
import type {
  AggregateSpotArgs,
  CreateOneSpotArgs,
  DeleteManySpotArgs,
  DeleteOneSpotArgs,
  FindFirstSpotArgs,
  FindManySpotArgs,
  FindUniqueSpotArgs,
  UpdateManySpotArgs,
  UpdateOneSpotArgs,
  UpsertOneSpotArgs,
} from '@zen/nest-api/graphql/resolversTypes';
import { DefaultFields, PrismaSelectService, Spot } from '@zen/nest-api/prisma';
import { CaslFactory, CaslGuard } from '@zen/nest-auth';

import { DEFAULT_FIELDS_TOKEN } from '../default-fields';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleSpotQuery: Spot
//   }
//   extend type Mutation {
//     sampleSpotMutation(args: Int!): Boolean
//   }
//   extend type Spot {
//     sampleSpotField: String
//   }
// `;

@Resolver('Spot')
@UseGuards(CaslGuard)
export class SpotResolver {
  constructor(
    @Inject(DEFAULT_FIELDS_TOKEN) private readonly defaultFields: DefaultFields,
    private readonly prismaSelect: PrismaSelectService,
    private readonly caslFactory: CaslFactory,
    @Inject('IAM_SERVICE') private client: ClientProxy
  ) {}

  @ResolveField()
  password() {
    return null;
  }

  @ResolveField()
  async rules(@Parent() parent: Spot) {
    const ability = await this.caslFactory.createAbility(parent);
    return ability.rules;
  }

  @Query()
  findUniqueSpot(
    @Args() args: NonNullableFields<FindUniqueSpotArgs>,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.client.send<Spot, NonNullableFields<FindUniqueSpotArgs>>(
      { query: 'findUniqueSpot' },
      this.prismaSelect.getArgs(info, args, this.defaultFields)
    );
  }

  @Query()
  findFirstSpot(
    @Args() args: NonNullableFields<FindFirstSpotArgs>,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.client.send<Spot, NonNullableFields<FindFirstSpotArgs>>(
      { query: 'findFirstSpot' },
      this.prismaSelect.getArgs(info, args, this.defaultFields)
    );
  }

  @Query()
  findManySpot(@Args() args: FindManySpotArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<Spot, FindManySpotArgs>(
      { query: 'findManySpot' },
      this.prismaSelect.getArgs(info, args, this.defaultFields)
    );
  }

  @Query()
  findManySpotCount(@Args() args: FindManySpotArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<Spot, FindManySpotArgs>(
      { query: 'findManySpotCount' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Query()
  aggregateSpot(@Args() args: AggregateSpotArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<unknown, FindManySpotArgs>(
      { query: 'aggregateSpot' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Mutation()
  createOneSpot(@Args() args: CreateOneSpotArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<unknown, CreateOneSpotArgs>(
      { cmd: 'createOneSpot' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Mutation()
  updateOneSpot(
    @Args() args: NonNullableFields<UpdateOneSpotArgs>,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.client.send<unknown, NonNullableFields<UpdateOneSpotArgs>>(
      { cmd: 'updateOneSpot' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Mutation()
  updateManySpot(@Args() args: UpdateManySpotArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<unknown, UpdateManySpotArgs>(
      { cmd: 'updateManySpot' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Mutation()
  upsertOneSpot(@Args() args: UpsertOneSpotArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<unknown, UpsertOneSpotArgs>(
      { cmd: 'upsertOneSpot' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Mutation()
  deleteOneSpot(
    @Args() args: NonNullableFields<DeleteOneSpotArgs>,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.client.send<unknown, DeleteOneSpotArgs>(
      { cmd: 'deleteOneSpot' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Mutation()
  deleteManySpot(@Args() args: DeleteManySpotArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<unknown, DeleteManySpotArgs>(
      { cmd: 'deleteManySpot' },
      this.prismaSelect.getArgs(info, args)
    );
  }
}
