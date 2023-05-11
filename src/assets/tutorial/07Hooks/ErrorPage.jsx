import Jumbotron from "../../components/Jumbotron";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const Wrapper = styled.section`
    .error-title {
      font-size: 10rem;
    }
  `;
  return (
    <Wrapper>
      <Jumbotron title="You accessed an invalid page" />
      <div className="container text-center ">
        <p className="fw-bold text-danger error-title">404!</p>
        <h1>You entered an unrecognized URI.</h1>
        <Link to="/" className="btn btn-primary">
          Go back Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
