import { CallHandler, ExecutionContext, HttpException, Injectable, NestInterceptor } from '@nestjs/common';
import { tap, Observable } from 'rxjs';

class errorData {
  public status: 'error';
  public message: string | any;
  public http_status_code: number;
}

interface Response<T> {
  data: T;
}

@Injectable()
export class RpcHttpExceptionInterceptor<T> implements NestInterceptor<T, Response<errorData>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<errorData>> {
    return next.handle().pipe(
      tap((data: any) => {
        if (data.status === 'error') {
          throw new HttpException(data.message || 'Unknown error', data.code || 500);
        }
      }),
    );
  }
}
