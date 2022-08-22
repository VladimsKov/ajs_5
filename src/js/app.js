// TODO: write your code here

import Bowman from './characterTypes/bowman';

// created heroes:
const bowmanHero = new Bowman('Hero1');

bowmanHero.levelUp();

bowmanHero.damage(80);
// console.log(`Здоровье bowman after damage: ${bowmanHero.health.toFixed(2)}`);
