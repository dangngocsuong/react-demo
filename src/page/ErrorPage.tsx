import Title from "antd/es/typography/Title";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { FunctionComponent } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Container, MainConent } from "styles/common";
import { SiteWrap } from "styles/global";
const ErrorPage: FunctionComponent = () => {
    const error = useRouteError();

    return (
        <SiteWrap>
            <Header />
            <MainConent>
                <Container>
                    <Title level={2}>Oops!</Title>
                    <Title level={3}>Sorry, an unexpected error has occurred.</Title>
                    <Title level={4}>{isRouteErrorResponse(error) && `${error.status} ${error.statusText}`}</Title>
                </Container>
            </MainConent>
            <Footer />
        </SiteWrap>

    )
}
export default ErrorPage;