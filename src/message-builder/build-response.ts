import { IMsMessage, MsMessageStatus } from '../@types';

export function buildResponse(data: any = '', namespase?: string): IMsMessage<any> {
  return {
    status: MsMessageStatus.SUCCESS,
    data,
    error: null,
    namespace: namespase || 'SERVICE',
  };
}
