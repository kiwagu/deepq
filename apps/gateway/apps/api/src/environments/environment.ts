import { EnvironmentBase, serviceName } from './environment.base';

export const environment: EnvironmentBase = {
  serviceName,
  production: false,
  expressPort: process.env.PORT as string || 7070,
  graphql: {
    sandbox: false,
    introspection: false,
    csrfPrevention: true,
  },
};
