function JoeDev() {
	const customFont = `@font-face {
        font-family: 'Source Code Pro';
        src: url('./SourceCodePro-Regular.ttf') format('truetype');
    }`;

	return (
		<svg
			style={{ customFont }}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 280 150">
			<text
				id="textElement"
				x="0"
				dominantBaseline="middle"
				y="50%"
				fill="rgb(250, 250, 250)"
				style={{
					fontFamily:
						"Source Code Pro, monospace, sans-serif",
					fontSize: "60px",
				}}></text>
			<line
				id="lineElement"
				x1="3"
				y1="29.5"
				x2="3"
				y2="106"
				stroke="white"
				strokeWidth="5">
				<animate
					id="line-blink"
					attributeName="visibility"
					values="visible;hidden"
					dur="500ms"
					repeatCount="indefinite"
				/>
			</line>
			<script type="text/ecmascript">
				{`
			const textElement = document.getElementById("textElement");
			const lineElement = document.getElementById("lineElement");
			const lineAnimation = document.getElementById("line-blink");
			const textContent = "joe.dev";
			let index = 0;
			setTimeout(typeWriter, 2000)
			function typeWriter() {
				var textWidth = textElement.getComputedTextLength();
				textElement.textContent += textContent[index];
				lineElement.setAttribute("x1", textWidth + 39);
				lineElement.setAttribute("x2", textWidth + 39);
				lineAnimation.beginElement()
				index++;
				if (index < textContent.length) {
					const array = [100, 300, 200];
					const speed = array[Math.floor(Math.random() * array.length)];
					
					setTimeout(typeWriter, speed);
				}
			}
		`}
			</script>
		</svg>
	);
}

export default JoeDev;
