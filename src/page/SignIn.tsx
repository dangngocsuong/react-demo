import { Container, MainConent } from "styles/common";
import { BoxLogin } from "styles/home";
import Login from "components/Login/Login";
const SignIn = () => {
    
    return (
        <MainConent>
            <Container>
                <BoxLogin>
                    <Login />
                </BoxLogin>
            </Container>
        </MainConent>
    )
}
export default SignIn;