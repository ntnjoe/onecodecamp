import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, InputGroup, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [isLoading, setIsLoading] = useState(false);
	const [loadingProgress, setLoadingProgress] = useState(0);
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		const intervalId = setInterval(() => {
			setLoadingProgress((prevProgress) => {
				const newProgress = prevProgress + 10;
				console.log("running");
				if (newProgress >= 100) {
					clearInterval(intervalId);
				}
				return newProgress;
			});
		}, 200);
	};
	useEffect(() => {
		if (loadingProgress >= 100) {
			navigate("/");
		}
	}, [loadingProgress, navigate]);
	return (
		<div className="container-fluid h-100 d-flex align-items-center justify-content-center">
			{isLoading ? (
				<ProgressBar animated now={loadingProgress} className="w-50" />
			) : (
				<Form onSubmit={handleSubmit} className="bg-light p-3 rounded-1 d-flex flex-column gap-3 form-container">
					<Form.Group>
						<InputGroup>
							<InputGroup.Text className="border-dark" id="basic-addon1">
								@
							</InputGroup.Text>
							<Form.Control className="border-dark" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
						</InputGroup>
					</Form.Group>
					<Form.Group>
						<Form.Control className="border-dark" type="password" placeholder="Password" />
					</Form.Group>
					<Button variant="dark" type="submit">
						Submit
					</Button>
					<span className="small">
						Don't have an account? <Link to="/register">Register Here</Link>{" "}
					</span>
				</Form>
			)}
		</div>
	);
}
