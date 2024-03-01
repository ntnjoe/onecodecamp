import React, { useEffect, useState } from "react";
import style from "../styles/apiactivity.module.css";
export default function APIActivityFeb28() {
	const [joke, setJoke] = useState(null);
	const [error, setError] = useState(null);
	const [showJoke, setShowJoke] = useState(false);

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://v2.jokeapi.dev/joke/Programming?type=twopart"
			);
			const result = await response.json();

			if (result.error) {
				throw new Error(
					`Error fetching data. Try again later.`
				);
			}

			setJoke(result);
		} catch (error) {
			setError(error.message);
		}
	};
	const handleNewJoke = async () => {
		await fetchData();
		setShowJoke(false);
	};
	const handleShowJoke = () => {
		setShowJoke(true);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<section>
			<div className={style.mainContainer}>
				<div className={style.jokeContainer}>
					{error ? (
						<span className={style.errorMessage}>
							{error}
						</span>
					) : (
						joke && (
							<>
								<span>{joke.setup}</span>
								{!showJoke ? (
									<button
										className={style.btn}
										onClick={handleShowJoke}>
										Reveal Joke
									</button>
								) : (
									<span>{joke.delivery}</span>
								)}
							</>
						)
					)}
					<button
						className={style.btn}
						onClick={handleNewJoke}>
						New Joke
					</button>
				</div>
			</div>
		</section>
	);
}
