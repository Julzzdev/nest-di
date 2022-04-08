import { Injectable } from '@nestjs/common';
import { PowersupplyService } from 'src/powersupply/powersupply.service';

@Injectable()
export class CpuService {

  constructor(public powerSupplyService: PowersupplyService){}

  compute(a: number, b: number) {
    console.log('Drawing 10 watts from power supply service')
    this.powerSupplyService.supplyPower(10)
    return a + b
  }
}
