import { IMsMessage, MsMessageStatus } from '../@types';

export function buildWarn(code: number, message?: string | string[], namespace?: string): IMsMessage<null> {
  return {
    status: MsMessageStatus.WARN,
    data: null,
    error: {
      code,
      message,
    },
    namespace: namespace || 'SERVICE',
  };
}
