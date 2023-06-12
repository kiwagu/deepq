/**
 * Author: Peter Hoang
 * Company: Zen Software
 * License: MIT - Open source
 */
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
  InMemoryCacheConfig,
  NormalizedCacheObject,
  split,
} from '@apollo/client/core';
import { getOperationName } from '@apollo/client/utilities';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloModule } from 'apollo-angular';
import { BatchOptions, HttpBatchLink, HttpBatchLinkHandler } from 'apollo-angular/http';
import { createUploadLink } from 'apollo-upload-client';

export abstract class GraphQLOptions {
  resolvers?: ApolloClientOptions<NormalizedCacheObject>['resolvers'];
  cacheOptions?: InMemoryCacheConfig;
  uploadOptions?: createUploadLink.UploadLinkOptions & { mutationNames: string[] };
  batchOptions?: BatchOptions;
}

@NgModule({
  imports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpBatchLink, GraphQLOptions],
    },
  ],
})
export class ZenGraphQLModule {
  constructor(@Optional() @SkipSelf() parentModule?: ZenGraphQLModule) {
    if (parentModule) {
      throw new Error('ZenGraphQLModule is already loaded. Import it in the AppModule only.');
    }
  }

  static forRoot(options: GraphQLOptions): ModuleWithProviders<ZenGraphQLModule> {
    return {
      ngModule: ZenGraphQLModule,
      providers: [
        {
          provide: GraphQLOptions,
          useValue: options,
        },
      ],
    };
  }
}

export function createApollo(
  httpBatchLink: HttpBatchLink,
  options: GraphQLOptions
): ApolloClientOptions<NormalizedCacheObject> {
  let link: ApolloLink;

  let batch_link: HttpBatchLinkHandler;
  if (options.batchOptions) batch_link = httpBatchLink.create(options.batchOptions);
  else throw Error('No GraphQLOptions.batchOptions provided. You must set at least the uri.');

  if (!options.uploadOptions) {
    link = batch_link;
  } else {
    if (!options.uploadOptions.mutationNames)
      throw new Error(
        'GraphQLOptions.uploadOptions.mutationNames required when providing uploadOptions to list the mutation names to be sent as multi-part requests.'
      );

    const upload_link = createUploadLink(options.uploadOptions);

    const upload_batch_link = split(
      ({ query }) =>
        (options.uploadOptions?.mutationNames as string[])?.includes(
          getOperationName(query) as string
        ),
      upload_link,
      batch_link
    );

    link = upload_batch_link;
  }

  return {
    link,
    cache: new InMemoryCache(options.cacheOptions),
    resolvers: options.resolvers,
  };
}
