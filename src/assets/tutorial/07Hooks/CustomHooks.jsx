import React from "react";

import Jumbotron from "../../components/Jumbotron";
import Loader from "../../components/Loader";
import useFetch from "../../components/useFetch";

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
            const { id, name, username, website, phone, email } = product;
            return (
              <div className="alert alert-info mt-2 mb-2" key={id}>
                <p className="mb-0">
                  Name: <small className="text-muted fw-bold">{name}</small>
                </p>
                <p className="mb-0">
                  Username:
                  <small className="text-muted fw-bold">{username}</small>
                </p>
                <p className="mb-0">
                  Website:
                  <small className="text-muted fw-bold">{website}</small>
                </p>
                <p className="mb-0">
                  Phone: <small className="text-muted fw-bold">{phone}</small>
                </p>
                <p className="mb-0">
                  Email: <small className="text-muted fw-bold">{email}</small>
                </p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default CustomHooks;
