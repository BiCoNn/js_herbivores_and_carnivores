'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  minusHealth(delta) {
    this.health += delta;

    if (this.health <= 0) {
      const i = Animal.alive.indexOf(this);

      Animal.alive.splice(i, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!(target instanceof Herbivore)) {
      return;
    }

    if (target.hidden) {
      return;
    }
    target.minusHealth(-50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
