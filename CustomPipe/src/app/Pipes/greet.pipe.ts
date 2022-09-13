import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const date = new Date;
let hours = date.getHours();
let status = (hours < 12)? "Morning" :
             ((hours <= 18 && hours >= 12 ) ? "Afternoon" : "Night");
    
    return status+" "+value;
  }

}
