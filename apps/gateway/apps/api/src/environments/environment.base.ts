import { NestApplicationOptions } from '@nestjs/common';

export const serviceName = 'gateway-api';

export abstract class EnvironmentBase {
  readonly serviceName: string;
  readonly production: boolean;
  readonly expressPort: string | number;
  readonly cors?: NestApplicationOptions['cors'];
  readonly graphql: {
    readonly sandbox?: boolean;
    readonly introspection?: boolean;
    readonly csrfPrevention?: boolean;
  };
}
