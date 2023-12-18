import { Outlet } from "react-router-dom"
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { SiteWrap } from "styles/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Layout = () => {
	const queryClient = new QueryClient();
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