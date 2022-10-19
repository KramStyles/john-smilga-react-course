import React from "react";

import { profile } from "../../data/data";

const UseStateObject = () => {
  const title = "use state object example";
  console.log(profile);
  return (
    <>
      <div className="bg-primary p-5 text-white text-center fs-3 fw-bold text-capitalize mb-5">
        {title}
      </div>
      <div className="container"></div>
    </>
  );
};

export default UseStateObject;
