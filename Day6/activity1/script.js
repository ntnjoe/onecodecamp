//task 1

const squareNum = (num) => console.log(num * num);
squareNum(5);

//task 2
const username = "John Doe";
const age = 24;
const message = `Welcome, ${username}, you are now ${age} years old.`;
console.log(message);

//task 3
const person = {
	firstName: "John",
	lastName: "Doe",
};
const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);
//task 4

const alpha = ["a", "b", "c", "d"];
const numeric = [1, 2, 3, 4];
const alphanumeric = [...alpha, ...numeric];
console.log(alphanumeric);
//task 5
const areaCalc = (length = 1, width = 1) => {
	console.log(length * width);
};
areaCalc();
areaCalc(5, 9);

// Task 6: Create a class called "Person" with properties for name and age,
// and a method to introduce the person. Instantiate an object of the class
// and call the introduce method.

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	introduce() {
		console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
	}
}

const person1 = new Person("John", 24);
person1.introduce();
