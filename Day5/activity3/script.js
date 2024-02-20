const canvas = document.getElementById("myCanvas");
const resetBtn = document.getElementById("reset");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circles = [];

canvas.addEventListener("click", function handleClick(event) {
	let selectedColor = document.querySelector('input[name="color"]:checked');
	const circle = {
		x: event.clientX,
		y: event.clientY,
		radius: generateRadius(),
		color: selectedColor.value,
	};
	circles.push(circle);
});

resetBtn.addEventListener("click", () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	circles = [];
});

function generateCircles() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	circles.forEach((circle) => {
		if (circle.radius < 1) {
			circles.splice(circles.indexOf(circle), 1);
		}
	});
	circles.forEach((circle) => {
		circle.radius -= 0.2;
		ctx.beginPath();
		ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
		ctx.fillStyle = circle.color;
		ctx.fill();
		ctx.closePath();
	});
	requestAnimationFrame(generateCircles);
}
function generateRadius() {
	return Math.floor(Math.random() * 101 + 100);
}

generateCircles();
