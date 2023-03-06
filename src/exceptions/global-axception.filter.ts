import { /*ArgumentsHost,*/ Catch, Logger } from '@nestjs/common';
import { buildError } from '../message-builder';

@Catch()
export class GlobalExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);
  // catch(exception: any, host: ArgumentsHost) {
  catch(exception: any, _) {
    this.logger.error(exception);
    const code = exception.code || 500;
    const message = exception.message || exception;
    return buildError(code, message, process.env.MS_NAME || 'SERVICE');
  }
}
