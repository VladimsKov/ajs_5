// HomeWork AJS_5

export default class Character {
  constructor(name) {
    if ((name.length) < 2 || (name.length) > 10) {
      throw new Error('некорректная длина имени');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
      return;
    }
    throw new Error('character is died!');
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
      return;
    }
    throw new Error('character is died!');
  }
}
