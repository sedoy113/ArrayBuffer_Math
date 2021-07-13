import MagCharacter from './MagCharacter';

export default class Magician extends MagCharacter {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
