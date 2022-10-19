import React from "react";

import { profile } from "../../data/data";
import Jumbotron from "../../components/Jumbotron";

const UseStateObject = () => {
  const title = "use state object example";
  console.log(profile);
  return (
    <React.Fragment>
      <Jumbotron title={title} />
      <div className="container"></div>
    </React.Fragment>
  );
};

export default UseStateObject;
