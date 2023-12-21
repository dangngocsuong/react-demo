import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "store/sessionManager";
import { Container, MainConent } from "styles/common";
const Home: FunctionComponent = () => {  
    
    const navigate = useNavigate();
	useEffect(() => {
		if (isUserLoggedIn()) {
            return navigate('/');
		} else {
			return navigate('/signin');
		}  
	},[]);

    return (
        <MainConent>
            <Container>
                Home Page
            </Container>
        </MainConent>
    )
}
export default Home;