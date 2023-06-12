import { EnvironmentBase, serviceName } from './environment.base';

export const environment: EnvironmentBase = {
  serviceName,
  production: false,
  expressPort: process.env.PORT as string || 7070,
  cors: { credentials: true, origin: true },
  graphql: {
    sandbox: true,
    introspection: true,
    csrfPrevention: true,
  },
};
