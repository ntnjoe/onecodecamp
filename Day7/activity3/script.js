class Character {
	constructor(name) {
		this.name = name;
		this.health = 100;
		this.stamina = 100;
		this.mana = 100;
	}
	walk() {
		this.stamina--;
	}
	run() {
		this.stamina = this.stamina - 3;
	}
	showStats() {
		console.log("Name:", this.name);
		console.log("Health:", this.health);
		console.log("Stamina:", this.stamina);
		console.log("Mana:", this.mana);
	}
}
const character = new Character("Invoker");
character.walk();
character.walk();
character.walk();
character.run();
character.run();
character.showStats();

class Shaman extends Character {
	constructor(name) {
		super();
		this.name = name;
		this.health = 150;
	}
	heal() {
		this.health += 5;
		this.stamina += 5;
		this.mana += 5;
	}
}
const shaman = new Shaman("Elric");
shaman.walk();
shaman.walk();
shaman.walk();
shaman.run();
shaman.run();
shaman.heal();
shaman.showStats();

class Swordsman extends Character {
	constructor(name) {
		super();
		this.name = name;
		this.health = 170;
	}
	slash() {
		this.mana -= 10;
	}
	showStats() {
		console.log("I am powerful");
		super.showStats();
	}
}
const swordsman = new Swordsman("Zoro");
swordsman.walk();
swordsman.walk();
swordsman.walk();
swordsman.run();
swordsman.run();
swordsman.slash();
swordsman.slash();
swordsman.showStats();

character.heal();
character.slash();
