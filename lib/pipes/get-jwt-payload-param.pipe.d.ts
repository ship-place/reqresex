import { PipeTransform } from '@nestjs/common';
export declare class GetJwtPayloadParameterPipe implements PipeTransform {
    private parametrName;
    constructor(parametrName: string);
    transform(value: any, _: any): any;
}
