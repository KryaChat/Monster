import { Component } from '@angular/core';
import { MonsterSpawner} from './monster-spawner/monster-spawner';
import { Monster} from './monster/monster';
import { ChildMonster} from './child-monster/child-monster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    let monsterSpawner: MonsterSpawner = new MonsterSpawner();
    let monster: Monster = monsterSpawner.spawnMonster('black');
    monster.growEye(6);
    monster.changeColor('ugtfkhgvckhg');
    let childMonster: ChildMonster = monster.spawnChildMonster();
    childMonster.growEye(23);

    console.debug('Monster', monster);
    console.debug('ChildMonster', childMonster);
  }
}
