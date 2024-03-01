import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

//pages
// import Home from "./pages/Home";
import ReactBootstrapLogin from "./pages/ReactBootstrapLogin";
// import APIDemo from "./pages/APIDemo";
import APIActivityFeb28 from "./pages/APIActivityFeb28";
import APIActivityFeb28Axios from "./pages/APIActivityFeb28Axios";
import Portfolio from "./pages/Portfolio";
import ClockActivity from "./pages/ClockActivity";
import ComponentActivity from "./pages/ComponentActivity";
import TodoList from "./pages/TodoList";
//layout
import HomeLayout from "./layout/HomeLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				path: "/",
				element: <Portfolio />,
			},
			{
				path: "/clock-activity",
				element: <ClockActivity />,
			},
			{
				path: "/component-activity",
				element: <ComponentActivity />,
			},
			{
				path: "/todo-activity",
				element: <TodoList />,
			},
			{
				path: "/reactbootstrap-login",
				element: <ReactBootstrapLogin />,
			},
			{
				path: "/fetchapi-activity",
				element: <APIActivityFeb28 />,
			},
			{
				path: "/axiosapi-activity",
				element: <APIActivityFeb28Axios />,
			},
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
