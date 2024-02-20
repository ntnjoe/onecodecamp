const act1Func = () => {
	const input = prompt("Enter grade:");
	if (input >= 90) {
		console.log("A");
	} else if (input >= 80 && input <= 89) {
		console.log("B");
	} else if (input >= 70 && input <= 79) {
		console.log("C");
	} else if (input >= 60 && input <= 69) {
		console.log("D");
	} else if (input < 60) {
		console.log("F");
	} else {
		console.log("Invalid Input");
	}
};

const act2Func = () => {
	const start = prompt("Enter starting num:");
	const end = prompt("Enter end num:");
	let current = parseInt(start);
	while (current != parseInt(end) + 1) {
		console.log(current);
		current++;
	}
};
const act3Func = () => {
	const secretNumber = Math.floor(Math.random() * 10) + 1;
	console.log(secretNumber);
	let attempt = 0;
	let guessedNumber;
	console.log("Hello, Player. Guess the secret number!");
	do {
		guessedNumber = prompt("What is the secret number?");
		attempt++;
		if (guessedNumber < secretNumber) {
			console.log("Too low! Try again");
		} else if (guessedNumber > secretNumber) {
			console.log("Too high! Try again");
		} else {
			console.log("Congratulations! You guessed the correct number:", secretNumber);
			console.log("It took you", attempt, "attempts");
		}
	} while (guessedNumber != secretNumber);
};

const activity = prompt("Choose activity: ");
switch (activity) {
	case "1":
		act1Func();
		break;
	case "2":
		act2Func();
		break;
	case "3":
		act3Func();
		break;
	default:
		console.log("Invalid input");
		break;
}
