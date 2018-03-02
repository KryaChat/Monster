import { ChildMonster} from '../child-monster/child-monster';

export class Monster {
  public color: string = 'red';
  public alive: boolean = true;

  protected eyeCount: number = 2;

  constructor(colorParam?: string) {
    this.color = colorParam;
  }

  public growEye(newNumber: number) {
    this.eyeCount += newNumber;
  }

  changeColor(color: string) {
    this.color = color;
  }

  spawnChildMonster(): ChildMonster {
    return new ChildMonster();
  }
}
