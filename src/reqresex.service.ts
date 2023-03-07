import { Injectable, Logger } from '@nestjs/common';
import { IMsMessage } from './@types';
import { defaultReqresexOptions, ReqresexOptions } from './@types/interfaces/optionst.interface';
import * as msgBuilder from './message-builder';

@Injectable()
export class ReqresexService {
  private readonly logger = new Logger(ReqresexService.name);
  private options: ReqresexOptions;

  constructor(options: Partial<ReqresexOptions>) {
    this.options = Object.assign({}, defaultReqresexOptions, options);
    this.logger.log('Service Init');
  }

  buildRequest(data: any = '', access_token: string): IMsMessage<any> {
    return msgBuilder.buildRequest(data, access_token);
  }

  buildResponse(data: any = ''): IMsMessage<any> {
    return msgBuilder.buildResponse(data, this.options.serviceName);
  }

  buildWarn(code: number, message?: string | string[]): IMsMessage<null> {
    return msgBuilder.buildWarn(code, message, this.options.serviceName);
  }

  buildError(code: number, message?: string | string[]): IMsMessage<null> {
    return msgBuilder.buildError(code, message, this.options.serviceName);
  }
}
