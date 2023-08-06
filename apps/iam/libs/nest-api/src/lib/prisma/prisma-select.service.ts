import { Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';

import { PalDefaultFields } from './default-fields';
import { Prisma } from '@prisma/client/nest-api';
import { DMMF } from '@prisma/client/nest-api/runtime';

@Injectable()
export class PrismaSelectService {
  getArgs<Args>(info: GraphQLResolveInfo, args: Args, defaultFields?: PalDefaultFields): Args {
    const result = new PrismaSelect(info, {
      defaultFields: defaultFields as any,
      dmmf: [Prisma.dmmf as Pick<DMMF.Document, 'datamodel' | 'mappings'>],
    }).value;

    if (!result.select || Object.keys(result.select).length > 0) {
      return {
        ...args,
        ...result,
      };
    }

    return args;
  }
}
