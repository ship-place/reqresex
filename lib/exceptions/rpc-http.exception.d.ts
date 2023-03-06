import { RpcException } from '@nestjs/microservices';
export declare class RpcHttpException extends RpcException {
    code: number;
    constructor(error: any, code?: number);
}
