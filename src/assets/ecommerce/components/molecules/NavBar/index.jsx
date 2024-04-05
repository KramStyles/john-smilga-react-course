import styled from "styled-components";
import Logo from "../../images/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
    height: 5rem;

    .nav-center {
        width: 90vw;
        margin: 0 auto;
    }
`

const Index = () => {
    return <NavContainer className="d-flex align-items-center justify-content-center">

    </NavContainer>
}

export default Index;
