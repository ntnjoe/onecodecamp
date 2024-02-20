// Generate a random number between 1 and 10.
const randInt = Math.floor(Math.random() * 10 + 1);
console.log(randInt);
// Guess what the random generated number is
const input = parseInt(prompt("Guess the random number"));
// Check if the user's input is a valid number

if (isNaN(input)) {
	console.log("Input a valid number");
} else {
	// Check if the guess is correct.
	if (input === randInt) {
		console.log("Congratulations you guessed the right number");
	} else {
		console.log(`Wrong! The random number is ${randInt}`);
	}
}
