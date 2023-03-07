import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ReqresexOptions } from './@types/interfaces/optionst.interface';
import { ReqresexService } from './reqresex.service';

@Module({})
export class ReqresexModule {
  static forRoot(options: Partial<ReqresexOptions>): DynamicModule {
    const providers: Provider[] = [
      {
        provide: ReqresexService,
        useValue: new ReqresexService(options),
      },
    ];

    return {
      providers: providers,
      exports: providers,
      module: ReqresexModule,
    };
  }
}
