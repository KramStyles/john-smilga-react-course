import Jumbotron from "../../components/Jumbotron";

const ErrorPage = () => {
  return (
    <>
      <Jumbotron title="You accessed an invalid page" />
      <div className="container text-center ">
        <p className="fw-bold text-danger" style={{ fontSize: "10rem" }}>
          404!
        </p>
        <h1 style={{ marginTop: -70 }}>Wrong URI.</h1>
      </div>
    </>
  );
};

export default ErrorPage;
