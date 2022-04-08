import { Injectable } from '@nestjs/common';
import { PowersupplyService } from 'src/powersupply/powersupply.service';

@Injectable()
export class DiskService {
  constructor(public powerSupplySercvice: PowersupplyService){}

  getData() {
    console.log('Drawing 5 watts from power supply service')
    this.powerSupplySercvice.supplyPower(5)
    return 'data!'
  }
}
