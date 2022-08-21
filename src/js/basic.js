//HomeWork AJS_5

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
      return
    }
    throw new Error('character is died!'); 
  }
  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
      return
    }
    throw new Error('character is died!');
  }
}

//extended classes

export class Bowman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;   
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;   
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;   
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;   
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;   
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;   
  }
}