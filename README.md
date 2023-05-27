# Deepq

A set of the best apps, services, patterns, techniques and more for building distributed Node.js-based applications

## Tech stack

- Angular
- NestJs
- GraphQL
- Prisma

## Common folders structure

```code
repo - the pnpm monorepo with workspaces
|- apps
| |- app - the nx monorepo in integrated mode
| | |- apps
| | | |- api - graphql api gateway to rabbitmq bus
| | | |- srv - service with rabbitmq clients
| | |- libs
| | | |- api-lib
| | | |- srv-lib
|- libs - shared libs for all repo's packages
```

## Inspirations came from

- [⛩ Zen Starter Kit ⛩](https://github.com/ZenSoftware/zen)
