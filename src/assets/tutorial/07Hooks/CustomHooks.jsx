import React from "react";

import Jumbotron from "../../components/Jumbotron";
import Loader from "../../components/Loader";
import useFetch from "../../components/useFetch";
import { UserList } from "./userlist";

//Custom hooks let us reuse functionalities, components help reuse HTML elements

const url = "https://jsonplaceholder.typicode.com/users";

const CustomHooks = () => {
  const { loading, data } = useFetch(url);
  return (
    <>
      <Jumbotron title="custom hooks use-fetch example" />
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          data.map((product) => {
            return <UserList product={product} />;
          })
        )}
      </div>
    </>
  );
};

export default CustomHooks;
