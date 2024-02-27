import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
