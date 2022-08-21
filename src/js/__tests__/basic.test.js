
import Character, {Bowman, Swordsman, Magician, Daemon, Undead, Zombie} from '../basic';

test('name_length<2', ()=> {
  function newObj() {return new Character('a')};
  expect(newObj).toThrowError('некорректная длина имени');
  
});

test('name_length>10', ()=> {
  function newObj() {return new Character('aaaaaaaaaaaaaaaaaaaaaaaaa')}
  expect(newObj).toThrowError('некорректная длина имени');
});

test('2<name_length<10', ()=> {
  const newObj = new Character('aaa');
  expect(newObj).toEqual({
    name: 'aaa',
    health: 100,
    level: 1
  });
});

test('levelUp()&health>0', () => {
  const newObj = new Character('aaa');
  newObj.health = 10;
  newObj.attack = 10;
  newObj.defence = 10;
  newObj.levelUp();
  expect(newObj.health).toBe(100);
  expect(newObj.level).toBe(2);
  expect(newObj.attack).toBeCloseTo(12);
  expect(newObj.defence).toBeCloseTo(12); 
});

test('levelUp()&health<=0', () => {
  const newObj = new Character('aaa');
  newObj.health = 0;
  function levelUpTest() {return newObj.levelUp();}  
  expect(levelUpTest).toThrowError('character is died!'); 
});

test('damage()&health>0', () =>{
  const newObj = new Character('aaa');
  newObj.defence = 10;
  newObj.damage(10);
  expect(newObj.health).toBeCloseTo(91); 
});

test('damage()&health<=0', () => {
  const newObj = new Character('aaa');
  newObj.health = -5;
  function damageTest() {return newObj.damage(10);}  
  expect(damageTest).toThrowError('character is died!'); 
});

test('create_new_Bowman', () => {
  const newObj = new Bowman('aaa');
  expect(newObj).toEqual({
    name: 'aaa',
    health: 100,
    level: 1,
    type:'Bowman',
    attack: 25,
    defence: 25
  })
});

test('create_new_Swordsman', () => {
  const newObj = new Swordsman('aaa');
  expect(newObj).toEqual({
    name: 'aaa',
    health: 100,
    level: 1,
    type:'Swordsman',
    attack: 40,
    defence: 10
  })
});

test('create_new_Magician', () => {
  const newObj = new Magician('aaa');
  expect(newObj).toEqual({
    name: 'aaa',
    health: 100,
    level: 1,
    type:'Magician',
    attack: 10,
    defence: 40
  })
});

test('create_new_Daemon', () => {
  const newObj = new Daemon('aaa');
  expect(newObj).toEqual({
    name: 'aaa',
    health: 100,
    level: 1,
    type:'Daemon',
    attack: 10,
    defence: 40
  })
});

test('create_new_Undead', () => {
  const newObj = new Undead('aaa');
  expect(newObj).toEqual({
    name: 'aaa',
    health: 100,
    level: 1,
    type:'Undead',
    attack: 25,
    defence: 25
  })
});

test('create_new_Zombie', () => {
  const newObj = new Zombie('aaa');
  expect(newObj).toEqual({
    name: 'aaa',
    health: 100,
    level: 1,
    type:'Zombie',
    attack: 40,
    defence: 10
  })
});