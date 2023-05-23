import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { RpcError } from '@deepq/common';

@Catch()
export class RpcExceptionFilter implements ExceptionFilter {
  catch(error: RpcError) {
    if (error.name === 'RpcException') {
      throw new HttpException(error.response, error.status);
    }

    return error;
  }
}
