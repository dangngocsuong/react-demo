import { Container, MainConent } from "styles/common";
import { BoxLogin } from "styles/home";
import Register from "components/Register/Register";
const SignUp = () => {
    
    return (
        <MainConent>
            <Container>
                <BoxLogin>
                    <Register />
                </BoxLogin>
            </Container>
        </MainConent>
    )
}
export default SignUp;