import { useState } from "react";
import Jumbotron from "../../components/Jumbotron";

const UseStateCounter = () => {
  const title = "use state counter example";
  const [value, setValue] = useState(0);
  return (
    <>
      <Jumbotron title={title} />
      <div className="container">
        <p className="text-center text-primary" style={{ fontSize: "15rem" }}>
          {value}
        </p>
        <div className="d-flex justify-content-evenly">
          <button className="btn btn-danger btn-lg">Decrease</button>
          <button className="btn btn-light btn-lg">Reset</button>
          <button className="btn btn-success btn-lg">Increase</button>
        </div>
      </div>
    </>
  );
};

export default UseStateCounter;
