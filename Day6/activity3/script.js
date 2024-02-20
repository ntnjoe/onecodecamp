//first
function EmitRandomNumber1(attempt = 10) {
	setTimeout(() => {
		let randomNum = Math.floor(Math.random() * 101);
		console.log("Attempt");
		console.log("2 seconds have lapsed.");

		if (randomNum < 80 && attempt > 0) {
			console.log(`Random number generated is${randomNum}`);
			console.log("-----");
			EmitRandomNumber1(attempt--);
		} else {
			console.log(`Random number generated is ${randomNum}!!!`);
			console.log("-----");
		}
	}, 2000);
}
EmitRandomNumber1();

//second
let generateRandomNum = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let randomNum = Math.floor(Math.random() * 101);
			resolve(randomNum);
		}, 2000);
	});
};

function EmitRandomNumber2(attempt = 1) {
	if (attempt < 11) {
		generateRandomNum().then((result) => {
			console.log(`Attempt #${attempt}`);
			console.log("2 seconds have lapsed.");
			if (result > 80) {
				console.log(`Random number generated is ${result}!!!`);
				console.log("-----");
			} else {
				console.log(`Random number generated is ${result}`);
				console.log("-----");
				return EmitRandomNumber2(attempt + 1);
			}
		});
	}
}

EmitRandomNumber2();

//third
async function generateNum() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return Math.floor(Math.random() * 101);
}

async function EmitRandomNumber3(attempt = 1) {
	const randomInt = await generateNum();
	console.log(`Attempt #${attempt}`);
	if (randomInt > 80) {
		console.log(`Random number generated is ${randomInt}!!!`);
		console.log("-----");
	} else {
		console.log(`Random number generated is ${randomInt}`);
		console.log("-----");
		return EmitRandomNumber3(attempt + 1);
	}
}
EmitRandomNumber3();
