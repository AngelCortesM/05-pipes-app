import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroCreatorPipe',
})
export class HeroCreatorPipe implements PipeTransform {
  transform(value: Creator): string {
    return value === Creator.DC ? 'DC Comics' : 'Marvel Comics';
  }
}
