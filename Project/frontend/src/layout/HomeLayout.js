import React from "react";
import NavigationComponent from "../components/NavigationComponent";
import { Outlet } from "react-router-dom";
export default function HomeLayout() {
	return (
		<>
			<NavigationComponent />
			<main className="main-container">
				<Outlet />
			</main>
		</>
	);
}
