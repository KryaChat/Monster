import {Monster} from '../monster/monster';

export class MonsterSpawner {
  spawnMonster(color: string): Monster {
    return new Monster(color);
  }
}
