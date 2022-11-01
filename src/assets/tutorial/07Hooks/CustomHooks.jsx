import React from "react";

import Jumbotron from "../../components/Jumbotron";
import Loader from "../../components/Loader";
import UseFetch from "../../components/UseFetch";

//Custom hooks let us reuse functionalities, components help reuse HTML elements

const url = "https://course-api.netlify.app/api/javascript-store-products";

const CustomHooks = () => {
  const { loading, products } = UseFetch(url);
  return (
    <>
      <Jumbotron title="custom hooks use-fetch example" />
      {loading ? <Loader /> : <div className="container"></div>}
    </>
  );
};

export default CustomHooks;
