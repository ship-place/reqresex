import { IMsMessage } from '../@types';

export function buildRequest(data: any = '', access_token: string, namespace?: string): IMsMessage<any> {
  return {
    status: null,
    access_token,
    data,
    error: null,
    namespace: namespace || null,
  };
}
