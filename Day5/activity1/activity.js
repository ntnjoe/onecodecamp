const evenOrOdd = () => {
	const input = prompt("Input a number:");
	if (parseInt(input) % 2 === 0) {
		console.log("Even");
	} else {
		console.log("Odd");
	}
};
const celsiusToFahrenheit = () => {
	const celsius = prompt("Input Temperature");
	const fahrenheit = (parseInt(celsius) * 9) / 5 + 32;
	console.log(fahrenheit);
};
const multipleOf = () => {
	const input = parseInt(prompt("Input a Number:"));
	if (input % 3 === 0 && input % 5 === 0) {
		console.log("Multiple of 3 and 5");
	} else if (input % 3 === 0) {
		console.log("Multiple of 3");
	} else if (input % 5 === 0) {
		console.log("Multiple of 5");
	} else {
		console.log("Not a multiple of 3 or 5");
	}
};
const findLargestNumber = () => {
	const arr = [6, 3, 9, 10];
	let maxNum;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > maxNum) maxNum = arr[i];
	}
	console.log(maxNum);
};

const activity = prompt("Choose activity: ");
switch (activity) {
	case "1":
		evenOrOdd();
		break;
	case "2":
		celsiusToFahrenheit();
		break;
	case "3":
		multipleOf();
		break;
	case "3":
		findLargestNumber();
		break;
	default:
		console.log("Invalid input");
		break;
}
