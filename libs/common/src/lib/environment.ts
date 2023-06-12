export abstract class Environment {
  abstract readonly production: boolean;
  abstract readonly publicRegistration: boolean;
  abstract readonly auth: {
    /**
     * `app-load` will exchange the auth token every time the app loads
     *
     * `efficient` will exchange the auth token only when intervals are exceeded
     */
    readonly exchangeStrategy: 'app-load' | 'efficient';
    readonly jwtExchangeInterval: number;
    readonly rememberMeExchangeThreshold: number;
  };

  abstract readonly enableGoogleOAuth: boolean;
  abstract readonly url: {
    readonly loginRedirect: string;
    readonly api: string;
    readonly portal: string;
    readonly graphql: string;
  };
}

export class EnvironmentDev implements Environment {
  production = false;
  publicRegistration = true;
  auth = {
    exchangeStrategy: 'app-load',
    jwtExchangeInterval: 30 * 60 * 1000, // 30 minutes
    rememberMeExchangeThreshold: 45 * 24 * 60 * 60 * 1000, // 45 days
  } as const;
  enableGoogleOAuth = true;
  url = {
    loginRedirect: '/',
    api: 'http://localhost:7070',
    portal: 'http://localhost:4200/#',
    graphql: 'http://localhost:7070/graphql',
  } as const;
}

export class EnvironmentProd implements Environment {
  production = true;
  publicRegistration = true;
  auth = {
    exchangeStrategy: 'app-load',
    jwtExchangeInterval: 30 * 60 * 1000, // 30 minutes
    rememberMeExchangeThreshold: 45 * 24 * 60 * 60 * 1000, // 45 days
  } as const;
  enableGoogleOAuth = true;
  url = {
    loginRedirect: '/',
    api: 'https://api.site.com',
    portal: 'https://portal.site.com/#',
    graphql: 'https://api.site.com/graphql',
  } as const;
}
