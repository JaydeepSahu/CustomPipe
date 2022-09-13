import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feetToMeter'
})
export class FeetToMeterPipe implements PipeTransform {

  transform(feet: number, args: number): unknown {
    var meters = feet / 3.2808;
    return meters.toFixed(args)+" Meter";
  }

}
