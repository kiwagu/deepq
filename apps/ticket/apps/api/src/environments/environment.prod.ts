import { EnvironmentBase, serviceName } from './environment.base';

export const environment: EnvironmentBase = {
  serviceName,
  siteUrl: 'https://site.com/#',
  broker: { url: process.env.BROKER_URL || 'amqp://rabbitmq:5672' },
  production: true,
  expressPort: process.env.PORT as string,
  publicRegistration: true,
  graphql: {
    subscriptions: true,
    sandbox: false,
    introspection: false,
    csrfPrevention: true,
    uploads: {
      maxFileSize: 20_000_000, // 20 MB
      maxFiles: 5,
    },
  },
  jwtOptions: {
    secret: process.env.JWT_PRIVATE_KEY,
    signOptions: {
      algorithm: 'HS256',
      /**
       * The client will exchange the token every 30 minutes during active sessions
       * @see `libs\common\src\lib\environment` for `EnvironmentDev.jwtExchangeInterval`
       */
      expiresIn: 3600, // 1 hour (in seconds)
    },
  },
  mail: {
    // Docs: https://nodemailer.com/smtp/
    transport: {
      host: process.env.SMTP_SERVER,
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_LOGIN,
        pass: process.env.SMTP_PASSWORD,
      },
    },
    defaults: {
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
    },
  },
  throttle: {
    limit: 10,
    ttl: 60,
    ignoreUserAgents: [/googlebot/gi, /bingbot/gi],
  },
  openTelemetry: {
    serviceName,
    exporters: { enableOtlp: true },
    collectorOptions: {
      url: 'http://localhost:4317',
    },
  },
};
