import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
declare class errorData {
    status: 'error';
    message: string | any;
    http_status_code: number;
}
interface Response<T> {
    data: T;
}
export declare class RpcHttpExceptionInterceptor<T> implements NestInterceptor<T, Response<errorData>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<errorData>>;
}
export {};
