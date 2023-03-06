import { MsMessageStatus } from '../enums';
import { IMsError } from './ms-error.interface';
export interface IMsMessage<T> {
    status: MsMessageStatus;
    access_token?: string;
    data: T;
    error: IMsError;
    namespace: string;
}
