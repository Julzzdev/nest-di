import { Module } from '@nestjs/common';
import { PowersupplyService } from './powersupply.service';

@Module({
  providers: [PowersupplyService],
  exports: [PowersupplyService]
})
export class PowersupplyModule {}
