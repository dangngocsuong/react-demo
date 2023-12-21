import { Container, MainConent } from "styles/common";
import PageTitle from "../components/PageTitle/PageTitle";
import { FunctionComponent } from "react";

const About: FunctionComponent = () => {
    return (
        <>
            <PageTitle />
            <MainConent>
                <Container>
                    About Page
                </Container>
            </MainConent>
        </>
    )
}
export default About;