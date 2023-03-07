import { IMsMessage } from './@types';
import { ReqresexOptions } from './@types/interfaces/optionst.interface';
export declare class ReqresexService {
    private readonly logger;
    private options;
    constructor(options: Partial<ReqresexOptions>);
    buildRequest(data: any, access_token: string): IMsMessage<any>;
    buildResponse(data?: any): IMsMessage<any>;
    buildWarn(code: number, message?: string | string[]): IMsMessage<null>;
    buildError(code: number, message?: string | string[]): IMsMessage<null>;
}
