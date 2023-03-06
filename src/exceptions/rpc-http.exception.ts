import { RpcException } from '@nestjs/microservices';

export class RpcHttpException extends RpcException {
  public code: number;
  constructor(error: any, code?: number) {
    super(error);
    this.code = code || 500;
  }
}
