// exercise 1
// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	introduce() {
// 		console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
// 	}
// }
// const person1 = new Person("John", 24);
// person1.introduce();

//exercise 2
// class Rectangle {
// 	constructor(width, height) {
// 		this.width = width;
// 		this.height = height;
// 	}
// 	calcArea() {
// 		console.log(this.width * this.height);
// 	}
// 	calcPerimeter() {
// 		console.log(2 * (this.width + this.height));
// 	}
// }
// const myRectangle = new Rectangle(5, 10);
// myRectangle.calcArea();
// myRectangle.calcPerimeter();

//exercise 3
// class Shape {
// 	constructor() {}
// 	calculateArea() {
// 		return;
// 	}
// }
// class Circle {
// 	constructor(radius) {
// 		this.radius = radius;
// 	}
// 	calculateArea() {
// 		console.log(Math.PI * (this.radius * this.radius));
// 	}
// }
// class Rectangle {
// 	constructor(width, height) {
// 		this.width = width;
// 		this.height = height;
// 	}
// 	calculateArea() {
// 		console.log(this.width * this.height);
// 	}
// }
// const rectangle1 = new Rectangle(12, 7);
// const circle1 = new Circle(10);
// rectangle1.calculateArea();
// circle1.calculateArea();

// exercise 4
// class BankAccount {
// 	constructor(accountInfo, balance) {
// 		this.accountInfo = accountInfo;
// 		this.balance = balance;
// 	}
// 	deposit(value) {
// 		this.balance = this.balance + value;
// 		console.log(`You deposited $${value}.`);
// 		console.log(`Your new balance is $${this.balance}`);
// 	}
// 	withdraw(value) {
// 		if (value <= this.balance) {
// 			this.balance = this.balance - value;
// 			console.log(`You withdrew $${value}.`);
// 			console.log(`Your new balance is $${this.balance}`);
// 		} else {
// 			console.log("Cannot withdraw value higher than your current balance");
// 		}
// 	}
// 	getAccountInfo() {
// 		console.log(`Your account number is ${this.accountInfo}`);
// 	}
// }

// const newAccount = new BankAccount("11253267541", 300);
// newAccount.getAccountInfo();
// newAccount.withdraw(200);
// newAccount.deposit(100);
// newAccount.withdraw(300);

//exercise 5
class Animal {
	constructor(name, species) {
		this.name = name;
		this.species = species;
	}
	makeSound() {
		switch (this.species) {
			case "cat":
				console.log("meow meow");
				break;
			case "dog":
				console.log("woof woof");
				break;
			case "bird":
				console.log("chirp chirp");
		}
	}
}

const myAnimal = new Animal("Blake", "dog");
myAnimal.makeSound();

//exercise 6
class Dog extends Animal {
	makeSound() {
		console.log(`A ${this.species} named ${this.name} went woof woof`);
	}
}
class Cat extends Animal {
	makeSound() {
		console.log(`A ${this.species} named ${this.name} went meow meow`);
	}
}
class Bird extends Animal {
	makeSound() {
		console.log(`A ${this.species} named ${this.name} went chirp chirp`);
	}
}
const myCat = new Cat("Felicia", "cat");
const myDog = new Dog("Hector", "dog");
const myBird = new Bird("Flynn", "bird");

myCat.makeSound();
myDog.makeSound();
myBird.makeSound();
// //exercise 7
// class Shape {
// 	constructor(color, name) {
// 		this.color = color;
// 		this.name = name;
// 	}
// }
// class Circle extends Shape {
// 	constructor(radius) {
// 		super();
// 		this.radius = radius;
// 	}
// }
// class Square extends Shape {
// 	constructor(width, height) {
// 		super();
// 		this.width = width;
// 		this.height = height;
// 	}
// }
// const myShape = new Shape("red", "hexagon");
// const myCircle = new Circle(65);
// const mySquare = new Square(5, 10);

// //exercise 8
// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	greet() {
// 		console.log(`Hello, how are you? I am ${this.name} and I am ${this.age} years old.`);
// 	}
// }
// const myPerson = new Person("Joe", 24);

// class Student extends Person {
// 	constructor(studentId) {
// 		this.studentId = studentId;
// 	}
// 	greet() {
// 		console.log(`${super.greet()} My student ID is ${this.studentId}`);
// 	}
// }
