import React, { useEffect, useState } from "react";
import style from "../styles/apiactivity.module.css";
import axios from "axios";

export default function APIActivityFeb28Axios() {
	const [joke, setJoke] = useState(null);
	const [error, setError] = useState(null);
	const [showJoke, setShowJoke] = useState(false);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"https://v2.jokeapi.dev/joke/Programming?type=twopart"
			);

			if (response.data.error) {
				throw new Error(
					`Error fetching data. Try again later.`
				);
			}

			setJoke(response.data);
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
				<button className={style.btn} onClick={handleNewJoke}>
					New Joke
				</button>
			</div>
		</div>
	);
}
