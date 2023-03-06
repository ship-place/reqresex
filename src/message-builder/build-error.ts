import { IMsMessage, MsMessageStatus } from '../@types';

export function buildError(code: number, message?: string | string[], namespace?: string): IMsMessage<null> {
  return {
    status: MsMessageStatus.ERROR,
    data: null,
    error: {
      code,
      message,
    },
    namespace: namespace || process.env.MS_NAME || 'SERVICE',
  };
}
