import { EnvironmentBase, serviceName } from './environment.base';

export const environment: EnvironmentBase = {
  serviceName,
  production: true,
  expressPort: process.env.PORT as string,
  graphql: {
    sandbox: false,
    introspection: false,
    csrfPrevention: true,
  },
};
