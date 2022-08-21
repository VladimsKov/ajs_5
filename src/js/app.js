// TODO: write your code here
/*
import sortHeroes, { newHeroes } from './basic';

console.log(sortHeroes(newHeroes));
*/
import Character, {Bowman, Swordsman, Magician, Daemon, Undead, Zombie} from './basic';

//created heroes:
const bowmanHero = new Bowman('Hero1');
const swordsmanHero = new Swordsman('Hero2');
const magicianHero = new Magician('Hero3');
const daemonHero = new Daemon('Hero4');
const undeadHero = new Undead('Hero5');
const zombieHero = new Zombie('Hero6');

console.log(bowmanHero);
console.log(`Здоровье bowman: ${bowmanHero.health}`);
console.log(`attack: ${bowmanHero.attack}`);
bowmanHero.levelUp();
console.log(`attack after levelup: ${bowmanHero.attack}`);
console.log(`level after levelup: ${bowmanHero.level}`);
bowmanHero.damage(150);
console.log(`Здоровье bowman after damage: ${bowmanHero.health.toFixed(2)}`);
//bowmanHero.damage(150);

