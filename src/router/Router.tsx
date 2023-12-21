import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Home from "../page/Home";
import About from "../page/About";
import Blog from "../page/Blog";
import Contact from "../page/Contact";
import Dashboard from "../page/Dashboard";
import SignIn from "page/SignIn";
import SignUp from "page/SignUp";
import ErrorPage from "page/ErrorPage";

const Router = () => {
    const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout/>,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Home />,
					errorElement: <ErrorPage />,
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
				{
					path: "/signin",
					element: <SignIn/>
				},
				{
					path: "/signup",
					element: <SignUp/>
				},
			]
		}
	]);

    return (
        <RouterProvider router={router}/>
    )
}
export default Router;