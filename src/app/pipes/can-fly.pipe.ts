import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFlyPipe',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Puede volar' | 'No puede volar' {
    return value ? 'Puede volar' : 'No puede volar';
  }
}
