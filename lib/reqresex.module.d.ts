import { DynamicModule } from '@nestjs/common';
import { ReqresexOptions } from './@types/interfaces/optionst.interface';
export declare class ReqresexModule {
    static forRoot(options: Partial<ReqresexOptions>): DynamicModule;
}
