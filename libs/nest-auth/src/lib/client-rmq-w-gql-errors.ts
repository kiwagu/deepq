import { GraphQLError } from 'graphql';
import { Observable, catchError } from 'rxjs';

import { Injectable } from '@nestjs/common';

import { ClientRMQExt } from './client-rmq-ext';

@Injectable()
export class ClientRMQwGqlErrors extends ClientRMQExt {
  override send<TResult = unknown, TInput = unknown>(
    pattern: unknown,
    data: TInput
  ): Observable<TResult> {
    return super.send(pattern, data).pipe(
      catchError((err) => {
        throw new GraphQLError(err.message || String(err));
      })
    );
  }
}
