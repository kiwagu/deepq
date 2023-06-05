import { GraphQLResolveInfo } from 'graphql';

import { Inject, UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, ResolveReference, Resolver } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';

import type { NonNullableFields } from '@deepq/common';
import type {
  AggregateTicketArgs,
  CreateOneTicketArgs,
  DeleteManyTicketArgs,
  DeleteOneTicketArgs,
  FindFirstTicketArgs,
  FindManyTicketArgs,
  FindUniqueTicketArgs,
  UpdateManyTicketArgs,
  UpdateOneTicketArgs,
  UpsertOneTicketArgs,
} from '@zen/nest-api/graphql/resolversTypes';
import { DefaultFields, PrismaSelectService, Ticket } from '@zen/nest-api/prisma';
import { CaslFactory, CaslGuard } from '@deepq/nest-auth';

import { DEFAULT_FIELDS_TOKEN } from '../default-fields';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleTicketQuery: Ticket
//   }
//   extend type Mutation {
//     sampleTicketMutation(args: Int!): Boolean
//   }
//   extend type Ticket {
//     sampleTicketField: String
//   }
// `;

@Resolver('Ticket')
@UseGuards(CaslGuard)
export class TicketResolver {
  constructor(
    @Inject(DEFAULT_FIELDS_TOKEN) private readonly defaultFields: DefaultFields,
    private readonly prismaSelect: PrismaSelectService,
    private readonly caslFactory: CaslFactory,
    @Inject('TICKET_SERVICE') private client: ClientProxy
  ) {}

  @Query()
  @ResolveReference()
  findUniqueTicket(
    reference: { __typename: string; id: string },
    @Args() args: NonNullableFields<FindUniqueTicketArgs>,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.client.send<Ticket, NonNullableFields<FindUniqueTicketArgs>>(
      { query: 'findUniqueTicket' },
      this.prismaSelect.getArgs(
        info,
        reference?.id ? { where: { id: reference?.id } } : args,
        this.defaultFields
      )
    );
  }

  @Query()
  findFirstTicket(
    @Args() args: NonNullableFields<FindFirstTicketArgs>,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.client.send<Ticket, NonNullableFields<FindFirstTicketArgs>>(
      { query: 'findFirstTicket' },
      this.prismaSelect.getArgs(info, args, this.defaultFields)
    );
  }

  @Query()
  findManyTicket(@Args() args: FindManyTicketArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<Ticket, FindManyTicketArgs>(
      { query: 'findManyTicket' },
      this.prismaSelect.getArgs(info, args, this.defaultFields)
    );
  }

  @Query()
  findManyTicketCount(@Args() args: FindManyTicketArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<Ticket, FindManyTicketArgs>(
      { query: 'findManyTicketCount' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Query()
  aggregateTicket(@Args() args: AggregateTicketArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<unknown, FindManyTicketArgs>(
      { query: 'aggregateTicket' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Mutation()
  createOneTicket(@Args() args: CreateOneTicketArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<unknown, CreateOneTicketArgs>(
      { cmd: 'createOneTicket' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Mutation()
  updateOneTicket(
    @Args() args: NonNullableFields<UpdateOneTicketArgs>,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.client.send<unknown, NonNullableFields<UpdateOneTicketArgs>>(
      { cmd: 'updateOneTicket' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Mutation()
  updateManyTicket(@Args() args: UpdateManyTicketArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<unknown, UpdateManyTicketArgs>(
      { cmd: 'updateManyTicket' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Mutation()
  upsertOneTicket(@Args() args: UpsertOneTicketArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<unknown, UpsertOneTicketArgs>(
      { cmd: 'upsertOneTicket' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Mutation()
  deleteOneTicket(
    @Args() args: NonNullableFields<DeleteOneTicketArgs>,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.client.send<unknown, DeleteOneTicketArgs>(
      { cmd: 'deleteOneTicket' },
      this.prismaSelect.getArgs(info, args)
    );
  }

  @Mutation()
  deleteManyTicket(@Args() args: DeleteManyTicketArgs, @Info() info: GraphQLResolveInfo) {
    return this.client.send<unknown, DeleteManyTicketArgs>(
      { cmd: 'deleteManyTicket' },
      this.prismaSelect.getArgs(info, args)
    );
  }
}
