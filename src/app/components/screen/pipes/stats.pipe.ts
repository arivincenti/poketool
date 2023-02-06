import { Pipe, PipeTransform } from '@angular/core';
import { Stats } from 'src/app/shared/utils/stats.enum';

@Pipe({
  name: 'stats'
})
export class StatsPipe implements PipeTransform {

  transform(value: string): unknown {

    switch (value) {
      case 'hp':
        value = Stats.hp;
        break;
      case 'attack':
        value = Stats.attack;
        break;
      case 'defense':
        value = Stats.defense;
        break;
      case 'special-attack':
        value = Stats.specialattack;
        break;
      case 'special-defense':
        value = Stats.specialdefense;
        break;
      case 'speed':
        value = Stats.speed;
        break;
      default:
        value
        break;
    }

    return value
  }

}
