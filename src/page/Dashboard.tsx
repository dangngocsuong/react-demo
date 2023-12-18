import { ContainerFluid, MainConent } from "styles/common";
import DashboardPosts from "../components/Dashboard/DashboardPosts";
const Dashboard = () => {
    return (
        <MainConent>
            <ContainerFluid>
                <DashboardPosts />
            </ContainerFluid>
        </MainConent>
    )
}
export default Dashboard;