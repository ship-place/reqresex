import { Injectable, Logger } from '@nestjs/common';
import { IMsMessage } from './@types';
import * as msgBuilder from './message-builder';

@Injectable()
export class ReqresexService {
  private readonly logger = new Logger(ReqresexService.name);
  private name: string;

  constructor(name?: string) {
    this.name = name || 'service';
    this.logger.log('Service Init');
  }

  buildRequest(data: any = '', access_token: string): IMsMessage<any> {
    return msgBuilder.buildRequest(data, access_token);
  }

  buildResponse(data: any = ''): IMsMessage<any> {
    return msgBuilder.buildResponse(data, this.name);
  }

  buildWarn(code: number, message?: string | string[]): IMsMessage<null> {
    return msgBuilder.buildWarn(code, message, this.name);
  }

  buildError(code: number, message?: string | string[]): IMsMessage<null> {
    return msgBuilder.buildError(code, message, this.name);
  }
}
