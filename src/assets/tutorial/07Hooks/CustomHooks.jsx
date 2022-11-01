import React from "react";

import Jumbotron from "../../components/Jumbotron";
import Loader from "../../components/Loader";
import useFetch from "../../components/useFetch";

//Custom hooks let us reuse functionalities, components help reuse HTML elements

const url = "https://jsonplaceholder.typicode.com/users";

const CustomHooks = () => {
  const { loading, products } = useFetch(url);
  return (
    <>
      <Jumbotron title="custom hooks use-fetch example" />
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <div className="alert alert-success text-center">Success</div>
        )}
      </div>
    </>
  );
};

export default CustomHooks;
