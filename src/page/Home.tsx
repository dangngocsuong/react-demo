import { Container, MainConent } from "styles/common";
import { BoxLogin } from "styles/home";
import Login from "components/Login/Login";
import Register from "components/Register/Register";
const Home = () => {
    
    return (
        <MainConent>
            <Container>
                <BoxLogin>
                    <Login />
                    <Register />
                </BoxLogin>
            </Container>
        </MainConent>
    )
}
export default Home;