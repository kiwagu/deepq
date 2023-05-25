// This file is generated automatically. Do not edit it manually.
import { Prisma } from './generated';

export type DefaultFields = {
  readonly Spot?: Prisma.SpotSelect;
  readonly Ticket?: Prisma.TicketSelect;
};

type WithFuncSelect<T> = {
  [P in keyof T]?: T[P] | ((select: T[P]) => T[P]);
};

export type PalDefaultFields = WithFuncSelect<DefaultFields>;
