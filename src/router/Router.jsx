import { createBrowserRouter  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Service from "../pages/ServicePage";

import Checkout from "../pages/Checkout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/services",
				element: <Service />,
			},
			{
				path: "/checkout",
				element: <Checkout />,
			},
			{
				path: "/*",
				element: <Home />,
			},
		],
	},


]);

export default router;