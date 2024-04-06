import styled from "styled-components";
import Logo from "../../images/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../../../data";

const NavContainer = styled.nav`
  height: 5rem;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    height: 100%;
  }

  .nav-toggle {
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  
  .nav-links {
    display: none;
    list-style-type: none;
  }
  
  @media screen and (min-width: 992px){
    .nav-toggle {
      display: none;
    }
    .nav-links {
      display: flex;
    }
  }
`;

const Index = () => {
  return (
    <NavContainer className="d-flex align-items-center justify-content-center bg-danger">
      <div className="nav-center bg-success">
        <div className="d-flex align-items-center justify-content-between h-100">
          <Link to="/" className="h-100 ms-2">
            <img src={Logo} alt="react store" height="90%" />
          </Link>
            <ul className="nav-links">
                {links.map((item) => {
                    const { id, text, url } = item;
                    return (
                        <li key={id}>
                            <Link
                                className="text-decoration-none text-muted fw-bold text-capitalize mx-3"
                                to={`/ecommerce/${url}`}
                            >
                                {text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <button className="nav-toggle btn">
                <FaBars />
            </button>
        </div>
      </div>
    </NavContainer>
  );
};

export default Index;
