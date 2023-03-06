import { Module } from '@nestjs/common';
import { ReqresexService } from './reqresex.service';

@Module({
  providers: [ReqresexService],
  exports: [ReqresexService],
})
export class ReqresexModule {}
