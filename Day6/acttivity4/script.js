let minutes = parseInt(prompt("input 1-60"));
let seconds = 0;
let reset = false;
const minuteElement = document.getElementById("minutes");
const secsElement = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

updateMinuteElement();
updateSecondsElement();

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
function resetTimer() {
	minutes = 0;
	seconds = 0;
	reset = true;
	updateMinuteElement();
	updateSecondsElement();
}
async function startTimer() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	if (seconds == 0o0) {
		minutes--;
		seconds = 59;
	} else {
		seconds--;
	}
	if (reset) {
		return;
	}
	updateMinuteElement();
	updateSecondsElement();
	startTimer();
}

function updateMinuteElement() {
	if (minutes.toString().length < 2) {
		minuteElement.innerHTML = "0" + minutes.toString();
	} else {
		minuteElement.innerHTML = minutes.toString();
	}
}
function updateSecondsElement() {
	if (seconds.toString().length < 2) {
		secsElement.innerHTML = "0" + seconds.toString();
	} else {
		secsElement.innerHTML = seconds.toString();
	}
}
