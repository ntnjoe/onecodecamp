import React, { useEffect, useState } from "react";

export default function ClockActivity() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
			console.log("hey");
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);
	return (
		<section>
			<div
				className="section-wrapper"
				style={{ textAlign: "center" }}>
				<h1 className="display-1">Hello, World!</h1>
				<h2 className="display-2">It is {time}</h2>
			</div>
		</section>
	);
}
