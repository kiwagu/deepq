import { subject } from '@casl/ability';

import { Controller, Inject, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { NonNullableFields } from '@deepq/common';
import {
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
import {
  DefaultFields,
  PrismaClient,
  PrismaService,
  Spot,
} from '@zen/nest-api/prisma';
import { CaslAbility, CaslGuard, RpcForbiddenException } from '@deepq/nest-auth';

import { AppAbility } from '../../casl/casl.factory';
import { DEFAULT_FIELDS_TOKEN } from '../../casl/default-fields';

@Controller()
@UseGuards(CaslGuard)
export class SpotController {
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

  @MessagePattern({ query: 'findFirstSpot' })
  async findFirstSpot(
    @Payload() payload: NonNullableFields<FindFirstSpotArgs>,
    @CaslAbility() ability: AppAbility
  ) {
    const spot = await this.prismax.spot.findFirst(payload);
    if (ability.cannot('read', subject('Spot', spot as Spot)))
      throw new RpcForbiddenException();
    return spot;
  }

  @MessagePattern({ query: 'findUniqueSpot' })
  async findUniqueSpot(
    @Payload() payload: NonNullableFields<FindUniqueSpotArgs>,
    @CaslAbility() ability: AppAbility
  ) {
    const spot = await this.prismax.spot.findUnique(payload);
    if (ability.cannot('read', subject('Spot', spot as Spot)))
      throw new RpcForbiddenException();
    return spot;
  }

  @MessagePattern({ query: 'findManySpot' })
  async findManySpot(
    @Payload() payload: FindManySpotArgs,
    @CaslAbility() ability: AppAbility
  ) {
    const spots = await this.prismax.spot.findMany(payload);
    for (const spot of spots) {
      if (ability.cannot('read', subject('Spot', spot as Spot)))
        throw new RpcForbiddenException();
    }
    return spots;
  }

  @MessagePattern({ query: 'findManySpotCount' })
  async findManySpotCount(
    @Payload() payload: FindManySpotArgs,
    @CaslAbility() ability: AppAbility
  ) {
    if (ability.cannot('read', 'Spot')) throw new RpcForbiddenException();
    return this.prismax.spot.count(payload);
  }

  @MessagePattern({ query: 'aggregateSpot' })
  async aggregateSpot(
    @Payload() payload: AggregateSpotArgs,
    @CaslAbility() ability: AppAbility
  ) {
    if (ability.cannot('read', 'Spot')) throw new RpcForbiddenException();
    return this.prismax.spot.aggregate(payload);
  }

  @MessagePattern({ cmd: 'createOneSpot' })
  async createOneSpot(
    @Payload() payload: CreateOneSpotArgs,
    @CaslAbility() ability: AppAbility
  ) {
    if (ability.cannot('create', subject('Spot', payload.data as any)))
      throw new RpcForbiddenException();
    return this.prismax.spot.create(payload);
  }

  @MessagePattern({ cmd: 'updateOneSpot' })
  async updateOneSpot(
    @Payload() payload: NonNullableFields<UpdateOneSpotArgs>,
    @CaslAbility() ability: AppAbility
  ) {
    const spot = await this.prismax.spot.findUnique({
      where: payload.where,
      select: this.defaultFields.Spot,
    });
    if (ability.cannot('update', subject('Spot', spot as Spot)))
      throw new RpcForbiddenException();
    return this.prismax.spot.update(payload);
  }

  @MessagePattern({ cmd: 'updateManySpot' })
  async updateManySpot(
    @Payload() payload: UpdateManySpotArgs,
    @CaslAbility() ability: AppAbility
  ) {
    const spots = await this.prismax.spot.findMany({
      where: payload.where,
      select: this.defaultFields.Spot,
    });
    for (const spot of spots) {
      if (ability.cannot('update', subject('Spot', spot as Spot)))
        throw new RpcForbiddenException();
    }
    return this.prismax.spot.updateMany(payload);
  }

  @MessagePattern({ cmd: 'upsertOneSpot' })
  async upsertOneSpot(
    @Payload() payload: UpsertOneSpotArgs,
    @CaslAbility() ability: AppAbility
  ) {
    const spot = await this.prismax.spot.findFirst({
      where: payload.where,
      select: this.defaultFields.Spot,
    });
    if (
      (spot && ability.cannot('update', subject('Spot', spot as Spot))) ||
      ability.cannot('create', subject('Spot', payload.create as any))
    ) {
      throw new RpcForbiddenException();
    }
    return this.prismax.spot.upsert(payload);
  }

  @MessagePattern({ cmd: 'deleteOneSpot' })
  async deleteOneSpot(
    @Payload() payload: NonNullableFields<DeleteOneSpotArgs>,
    @CaslAbility() ability: AppAbility
  ) {
    const spot = await this.prismax.spot.findUnique({
      where: payload.where,
      select: this.defaultFields.Spot,
    });
    if (ability.cannot('delete', subject('Spot', spot as Spot)))
      throw new RpcForbiddenException();
    return this.prismax.spot.delete(payload);
  }

  @MessagePattern({ cmd: 'deleteManySpot' })
  async deleteManySpot(
    @Payload() payload: DeleteManySpotArgs,
    @CaslAbility() ability: AppAbility
  ) {
    const spots = await this.prismax.spot.findMany({
      where: payload.where,
      select: this.defaultFields.Spot,
    });
    for (const spot of spots) {
      if (ability.cannot('delete', subject('Spot', spot as Spot)))
        throw new RpcForbiddenException();
    }
    return this.prismax.spot.deleteMany(payload);
  }
}
