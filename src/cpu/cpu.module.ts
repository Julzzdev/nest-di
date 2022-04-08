import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowersupplyModule } from 'src/powersupply/powersupply.module';

@Module({
  imports:[PowersupplyModule],
  providers: [CpuService],
  exports: [CpuService]
})
export class CpuModule {}
