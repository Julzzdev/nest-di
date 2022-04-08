import { Module } from '@nestjs/common';
import { PowersupplyModule } from 'src/powersupply/powersupply.module';
import { DiskService } from './disk.service';

@Module({
  imports: [PowersupplyModule],
  providers: [DiskService],
  exports: [DiskService]
})
export class DiskModule {}
