import { Injectable } from '@nestjs/common';

@Injectable()
export class PowersupplyService {
  supplyPower(watts: number) {
    console.log(`Supplying ${watts} watts of power`)
  }
}
