import React, { useEffect, useState } from "react";

export default function APIDemo() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("https://www.boredapi.com/api/activity");
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const result = await response.json();
				setData(result);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);
	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{!loading && !error && (
				<div>
					<p>Activity: {data.activity}</p>
					<p>Type: {data.type}</p>
				</div>
			)}
		</div>
	);
}
