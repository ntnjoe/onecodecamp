//exercise 1
const greet = (name) => {
	console.log("Namaste", name);
};
greet("Joe");

//exercise 2
const sumCalc = (a, b) => {
	console.log(a + b);
};
sumCalc(5, 7);

//exercise 3
const isEven = (num) => {
	if (num % 2 === 0) {
		return true;
	}
	return false;
};

console.log(isEven(2));
console.log(isEven(8));
console.log(isEven(73));
console.log(isEven(19));

//exercise 4
let globalVar = "OneCodeCamp";
const createLocalVar = () => {
	let globalVar = "Javascript";
	console.log(globalVar);
};
createLocalVar();
console.log(globalVar);

//exercise 5
// hoistedFunction();
const hoistedFunction = () => {
	console.log("helloworld");
};

//exercise 6
const mathOperation = (a, b, callback) => {
	callback(a, b);
};
const add = (a, b) => {
	console.log(a + b);
};
const subtract = (a, b) => {
	console.log(a - b);
};
const multiply = (a, b) => {
	console.log(a * b);
};
const divide = (a, b) => {
	console.log(a / b);
};

mathOperation(8, 2, add);
mathOperation(8, 2, subtract);
mathOperation(8, 2, multiply);
mathOperation(8, 2, divide);

//exercise 7

const counter = () => {
	let count = 0;
	return function () {
		count++;
		console.log(count);
	};
};
const counter1 = counter();
const counter2 = counter();

counter1();
counter1();
counter2();
counter2();
counter1();

//exercise 8
let array = [4, 2, 8, 9, 14, 13];

const getProduct = (x) => {
	return x * 2;
};
const applyFunction = (arr, func) => {
	return arr.map((x) => func(x));
};
let newArray = applyFunction(array, getProduct);

console.log(newArray);

//exercise 9
const dataReceived = (user) => {
	console.log("Data received");
	console.log("Name:", user.name);
	console.log("Email:", user.email);
	console.log("Gender", user.gender);
};
function getUserData(callback) {
	console.log("Fetching Data");

	setTimeout(function () {
		callback({
			name: "Joe",
			email: "jnatan0203@gmail.com",
			gender: "Male",
		});
	}, 2000);
}
getUserData(dataReceived);
