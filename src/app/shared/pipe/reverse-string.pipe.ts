import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: String): String {
    let newString = "";
    for(let i=value.length-1; i>=0; i--) {
      newString = newString+value[i];
    }
    return newString;
  }

}
