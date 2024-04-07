import CartButtons from "../NavBar/CartButtons";
import { links } from "../../../data";
import Logo from "../../images/logo.png";
import styled from "styled-components";
import { TiTimesOutline } from "react-icons/ti";
import {Link} from "react-router-dom";

const Index = () => {
    return <SideBarContainer>
        <div className="sidebar-container">
            <div className="d-flex align-items-center justify-content-between px-2 py-1">
                <Link to="/" className="h-100 ms-2">
                    <img src={Logo} alt="react store" height="50px" />
                </Link>
                <button className="btn text-danger">
                    <TiTimesOutline className="nav-btn-close"/>
                </button>
            </div>
        </div>
    </SideBarContainer>
}

const SideBarContainer = styled.div `
  text-align: center;
  position: absolute;
  top: 0;
  background: yellow;
  width: 100%;
  height: 75vh;
  transition: var(--transit-med);
  //transform: translate(-100%);
  
  .nav-btn-close {
    font-size: 2.5rem;
    transition: var(--transit-slow);
  }
  .nav-btn-close:hover {
    color: black;
  }
  
`

export default Index;
