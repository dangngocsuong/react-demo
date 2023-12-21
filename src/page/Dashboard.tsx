import { ContainerFluid, MainConent } from "styles/common";
import DashboardPosts from "../components/Dashboard/DashboardPosts";
import { FunctionComponent } from "react";
const Dashboard: FunctionComponent = () => {
    return (
        <MainConent>
            <ContainerFluid>
                <DashboardPosts />
            </ContainerFluid>
        </MainConent>
    )
}
export default Dashboard;