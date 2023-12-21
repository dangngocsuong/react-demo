import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { SiteWrap } from "styles/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FunctionComponent, useEffect } from "react";
import { isUserLoggedIn } from "store/sessionManager";

const Layout: FunctionComponent = () => {
	const queryClient = new QueryClient();
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (isUserLoggedIn()) {
			return navigate(location.pathname);
		} else {
			return navigate('/signin');
		}  
	},[])

	return (
		<QueryClientProvider client={queryClient}>
			<SiteWrap>
				<Header />
				<Outlet />
				<Footer />
			</SiteWrap>
		</QueryClientProvider>
	)
}
export default Layout;