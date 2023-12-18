import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Home from "../page/Home";
import About from "../page/About";
import Blog from "../page/Blog";
import Contact from "../page/Contact";
import Dashboard from "../page/Dashboard";

const Router = () => {
    const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout/>,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "/about",
					element: <About/>,
					handle: [
						{
						  	crumb: <Link to="/">Home</Link>
						},
						{
							crumb: <Link to="/about">About</Link>
						}
					],
				},
				{
					path: "/blog",
					element: <Blog/>,
					handle: [
						{
						  	crumb: <Link to="/">Home</Link>
						},
						{
							crumb: <Link to="/blog">Blog</Link>
						}
					],
				},
				{
					path: "/contact",
					element: <Contact/>,
					handle: [
						{
						  	crumb: <Link to="/">Home</Link>
						},
						{
							crumb:<Link to="/contact">Contact</Link>
						}
					],
				},
				{
					path: "/dashboard",
					element: <Dashboard/>
				},
			]
		}
	]);

    return (
        <RouterProvider router={router}/>
    )
}
export default Router;