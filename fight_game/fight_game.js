var a = 1;
var b = 3.3;
var c = "hello";
var d = true;
var e = [1,5,7,'hello'];
var f = {};
var dog1 = {name:'fido',  age:3, isAnimal:true, toys:['fluff', 'rat']};
var dog2 = {name:'sally', age:4, isAnimal:true, toys:['mouse', 'doggy']};


function square(x){
  return x * x;
}

function cube(x){
  return square(x) * x;
}

function area(l,w){
  return l * w;
}

function Dog(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.dogage = age * 7;
  this.health = Math.random() * 100;
}

Dog.prototype.speak = function(){
  console.log('My name is ' + this.name);
}

Dog.prototype.fight = function(){
  this.health -= Math.random() * 10;
  if (this.health < 0) {
    console.log(this.name + ' is DEAD!!');
  }
  console.log(this.health);
}

Dog.prototype.heal = function(){
  this.health += Math.random() * 5;
  console.log(this.health);
}



//debugger;


//
//
// //make players Contstruct?
// function Player(obj) {
//   //guard operator
//   this.name = obj && obj.name || 'Player';
//   this.health = 1;
//   this.isZombie = false;
//   this.isTrulyDead = false;
//   this.dexterity = 0.5;
// }
//
// //make the players
// var player1 = new Player({name: 'Mario'});
// player2 = new Player();
// player3 = new Player({a: 'b'});
// player4 = new Player({name: 'Luigi'});
//
// //Weapon construct
// function Weapon(obj){
//   this.name = obj.name;
//   this.damage = obj.damage;
//   this.accuracy = 1 - obj.damage;
//   //do a default
//   this.ammo = obj && obj.ammo || 0;
// }
//
// //define weapons
// sword = new Weapon({name: 'Sword', damage: 0.2, ammo: Infinity});
// fists = new Weapon({name: 'Fists', damage: 0.05, ammo: Infinity});
// shotgun = new Weapon({name: 'Shotgun', damage: 0.8, ammo: 1});
//
// //give the players a weapon
// player1.weapon = sword;
// player2.weapon = fists;
// player3.weapon = shotgun;
//
// // if accuracy is greater than random, hit lands
// function didHit(accuracy) {
//   return accuracy > Math.random();
// }
//
// if (didHit(player1.weapon.accuracy)){
//   player2.health -= player1.weapon.damage;
// }
//
// Player.prototype.attack = function(otherPlayer){
//   if (didHit(this.weapon.accuracy)) {
//     otherPlayer.health -= this.weapon.damage;
//   }
// }
//
// player1.attack(player2);
//
// //////////////////////////////////////////////////////
//
// function Game(numberOfPlayers){
//   this.weapons = [];
//   weapons.push(new Weapon({name: 'Sword', damage: 0.2, ammo: Infinity}));
//   weapons.push(new Weapon({name: 'Shotgun', damage: 0.6, ammo: 1}));
//   weapons.push(new Weapon({name: 'Fist', damage: 0.05, ammo: Infinity}));
//
//   function getRandomInt(min,max){
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
//
//
//   this.players = [];
//   for (var i=0; i<numberOfPlayers; i++) {
//     var player = new Player;
//     player.weapon = getRandomWeapon();
//     this.players.push(new Player);
//   }
//
//   function getRandomWeapon() {
//     return this.weapons[getRandomInt(0, this.weapons.length)];
//   }
//
// }
