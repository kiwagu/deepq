import { subject } from '@casl/ability';

import { Controller, Inject, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { NonNullableFields } from '@deepq/common';
import {
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
import {
  DefaultFields,
  PrismaClient,
  PrismaService,
  Ticket,
} from '@zen/nest-api/prisma';
import { CaslAbility, CaslGuard, RpcForbiddenException } from '@deepq/nest-auth';

import { AppAbility } from '../../casl/casl.factory';
import { DEFAULT_FIELDS_TOKEN } from '../../casl/default-fields';

@Controller()
@UseGuards(CaslGuard)
export class TicketController {
  prismax: ReturnType<typeof this.getExtendedPrismaClient>;

  constructor(
    private readonly prisma: PrismaService,
    @Inject(DEFAULT_FIELDS_TOKEN) private readonly defaultFields: DefaultFields
  ) {
    this.prismax = this.getExtendedPrismaClient(prisma);
  }

  // Life-hack as described here
  // https://echobind.com/post/extending-types-for-prisma-extensions-in-nextjs
  getExtendedPrismaClient = (prisma: PrismaClient) =>
    prisma.$extends({
      name: 'prismax',
      result: {},
    });

  @MessagePattern({ query: 'findFirstTicket' })
  async findFirstTicket(
    @Payload() payload: NonNullableFields<FindFirstTicketArgs>,
    @CaslAbility() ability: AppAbility
  ) {
    const ticket = await this.prismax.ticket.findFirst(payload);
    if (ability.cannot('read', subject('Ticket', ticket as Ticket)))
      throw new RpcForbiddenException();
    return ticket;
  }

  @MessagePattern({ query: 'findUniqueTicket' })
  async findUniqueTicket(
    @Payload() payload: NonNullableFields<FindUniqueTicketArgs>,
    @CaslAbility() ability: AppAbility
  ) {
    const ticket = await this.prismax.ticket.findUnique(payload);
    if (ability.cannot('read', subject('Ticket', ticket as Ticket)))
      throw new RpcForbiddenException();
    return ticket;
  }

  @MessagePattern({ query: 'findManyTicket' })
  async findManyTicket(
    @Payload() payload: FindManyTicketArgs,
    @CaslAbility() ability: AppAbility
  ) {
    const tickets = await this.prismax.ticket.findMany(payload);
    for (const ticket of tickets) {
      if (ability.cannot('read', subject('Ticket', ticket as Ticket)))
        throw new RpcForbiddenException();
    }
    return tickets;
  }

  @MessagePattern({ query: 'findManyTicketCount' })
  async findManyTicketCount(
    @Payload() payload: FindManyTicketArgs,
    @CaslAbility() ability: AppAbility
  ) {
    if (ability.cannot('read', 'Ticket')) throw new RpcForbiddenException();
    return this.prismax.ticket.count(payload);
  }

  @MessagePattern({ query: 'aggregateTicket' })
  async aggregateTicket(
    @Payload() payload: AggregateTicketArgs,
    @CaslAbility() ability: AppAbility
  ) {
    if (ability.cannot('read', 'Ticket')) throw new RpcForbiddenException();
    return this.prismax.ticket.aggregate(payload);
  }

  @MessagePattern({ cmd: 'createOneTicket' })
  async createOneTicket(
    @Payload() payload: CreateOneTicketArgs,
    @CaslAbility() ability: AppAbility
  ) {
    if (ability.cannot('create', subject('Ticket', payload.data as any)))
      throw new RpcForbiddenException();
    return this.prismax.ticket.create(payload);
  }

  @MessagePattern({ cmd: 'updateOneTicket' })
  async updateOneTicket(
    @Payload() payload: NonNullableFields<UpdateOneTicketArgs>,
    @CaslAbility() ability: AppAbility
  ) {
    const ticket = await this.prismax.ticket.findUnique({
      where: payload.where,
      select: this.defaultFields.Ticket,
    });
    if (ability.cannot('update', subject('Ticket', ticket as Ticket)))
      throw new RpcForbiddenException();
    return this.prismax.ticket.update(payload);
  }

  @MessagePattern({ cmd: 'updateManyTicket' })
  async updateManyTicket(
    @Payload() payload: UpdateManyTicketArgs,
    @CaslAbility() ability: AppAbility
  ) {
    const tickets = await this.prismax.ticket.findMany({
      where: payload.where,
      select: this.defaultFields.Ticket,
    });
    for (const ticket of tickets) {
      if (ability.cannot('update', subject('Ticket', ticket as Ticket)))
        throw new RpcForbiddenException();
    }
    return this.prismax.ticket.updateMany(payload);
  }

  @MessagePattern({ cmd: 'upsertOneTicket' })
  async upsertOneTicket(
    @Payload() payload: UpsertOneTicketArgs,
    @CaslAbility() ability: AppAbility
  ) {
    const ticket = await this.prismax.ticket.findFirst({
      where: payload.where,
      select: this.defaultFields.Ticket,
    });
    if (
      (ticket && ability.cannot('update', subject('Ticket', ticket as Ticket))) ||
      ability.cannot('create', subject('Ticket', payload.create as any))
    ) {
      throw new RpcForbiddenException();
    }
    return this.prismax.ticket.upsert(payload);
  }

  @MessagePattern({ cmd: 'deleteOneTicket' })
  async deleteOneTicket(
    @Payload() payload: NonNullableFields<DeleteOneTicketArgs>,
    @CaslAbility() ability: AppAbility
  ) {
    const ticket = await this.prismax.ticket.findUnique({
      where: payload.where,
      select: this.defaultFields.Ticket,
    });
    if (ability.cannot('delete', subject('Ticket', ticket as Ticket)))
      throw new RpcForbiddenException();
    return this.prismax.ticket.delete(payload);
  }

  @MessagePattern({ cmd: 'deleteManyTicket' })
  async deleteManyTicket(
    @Payload() payload: DeleteManyTicketArgs,
    @CaslAbility() ability: AppAbility
  ) {
    const tickets = await this.prismax.ticket.findMany({
      where: payload.where,
      select: this.defaultFields.Ticket,
    });
    for (const ticket of tickets) {
      if (ability.cannot('delete', subject('Ticket', ticket as Ticket)))
        throw new RpcForbiddenException();
    }
    return this.prismax.ticket.deleteMany(payload);
  }
}
