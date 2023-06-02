import { Catch, ExceptionFilter } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from '@prisma/client/runtime';

@Catch()
export class ExceptionMapper implements ExceptionFilter {
  catch(
    exception:
      | RpcException
      | PrismaClientKnownRequestError
      | PrismaClientUnknownRequestError
  ): Observable<RpcException> {
    return throwError(() => ({
      name: RpcException.name,
      message: exception.message,
      status: 500,
      ...exception,
    }));
  }
}
