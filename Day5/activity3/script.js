const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let animationID = null;
let circles = [];

canvas.addEventListener("click", function handleClick(event) {
	const circle = {
		x: event.clientX,
		y: event.clientY,
		radius: 100,
	};
	circles.push(circle);
});

function generateCircles() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	circles.forEach((circle) => {
		circle.radius -= 0.5;
		if (circle.radius > 1) {
			ctx.beginPath();
			ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
			ctx.fillStyle = "blue";
			ctx.globalAlpha = 0.5;
			ctx.fill();
			ctx.closePath();
		} else {
			circles.splice(circles.indexOf(circle), 1);
		}
	});
	requestAnimationFrame(generateCircles);
}

generateCircles();
