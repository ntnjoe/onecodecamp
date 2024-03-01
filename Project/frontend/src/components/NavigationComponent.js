import React from "react";
import { NavLink } from "react-router-dom";
import JoeDev from "../assets/JoeDev";
import { List, XLg } from "react-bootstrap-icons";
import { useState } from "react";
export default function NavigationComponent() {
	const [showNav, setShowNav] = useState(false);
	const [animateClass, setAnimateClass] = useState("");
	const routes = [
		{
			date: "February 22",
			activity: [
				{
					name: "Clock Activity",
					link: "/clock-activity",
				},
			],
		},
		{
			date: "February 26",
			activity: [
				{
					name: "Component Activity",
					link: "/component-activity",
				},
				{
					name: "Todo List",
					link: "/todo-activity",
				},
			],
		},
		{
			date: "February 27",
			activity: [
				{
					name: "React Bootstrap",
					link: "/reactbootstrap-login",
				},
			],
		},
		{
			date: "February 28",
			activity: [
				{
					name: "Fetch API Activity",
					link: "/fetchapi-activity",
				},
				{
					name: "Fetch API w/ Axios",
					link: "/axiosapi-activity",
				},
			],
		},
	];
	const handleOpenNav = () => {
		setShowNav(!showNav);
		if (showNav) {
			setAnimateClass("animate-cw");
		} else {
			setAnimateClass("animate-counter-cw");
		}
	};
	return (
		<header className="header-container">
			<div className="header-wrapper">
				<div className="joedev-logo">
					<NavLink to="/">
						<JoeDev />
					</NavLink>
				</div>
				<div
					className={`navbtn-wrapper ${animateClass}`}
					onClick={handleOpenNav}>
					{showNav ? <XLg /> : <List />}
				</div>
				<nav
					className="nav-wrapper"
					style={{
						transform: `translateX(${
							showNav ? "0%" : "100%"
						})`,
					}}>
					<div className="activities-container">
						{routes.map((route, index) => (
							<div
								className="activity-wrapper"
								key={index}>
								<span className="date-span">
									{route.date}
								</span>
								<ul>
									{route.activity.map(
										(act, index) => (
											<li key={index}>
												<NavLink
													to={act.link}>
													{act.name}
												</NavLink>
											</li>
										)
									)}
								</ul>
							</div>
						))}
					</div>
				</nav>
			</div>
		</header>
	);
}
