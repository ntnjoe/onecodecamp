import React, { useEffect } from "react";
import { useState } from "react";

function App() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	const [time2, setTime2] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		setInterval(() => {
			setTime2(new Date().toLocaleTimeString());
		}, 1000);
	}, []);

	return (
		<div className="App">
			<div id="act1">
				<h1>Hello World</h1>
				<h2>It is{time}</h2>
			</div>
			<div id="act2">
				<h1>Hello World</h1>
				<h2>It is {time2}</h2>
			</div>
		</div>
	);
}

export default App;
