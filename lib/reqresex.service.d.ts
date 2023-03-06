import { IMsMessage } from './@types';
export declare class ReqresexService {
    private readonly logger;
    private name;
    constructor(name?: string);
    buildRequest(data: any, access_token: string): IMsMessage<any>;
    buildResponse(data?: any): IMsMessage<any>;
    buildWarn(code: number, message?: string | string[]): IMsMessage<null>;
    buildError(code: number, message?: string | string[]): IMsMessage<null>;
}
