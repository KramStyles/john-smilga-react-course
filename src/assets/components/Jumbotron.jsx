import React from "react";

import { navData } from "../data/data";
import NavDropdown from "./NavDropdown";

const Jumbotron = (props) => {
  const { title } = props;
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)">
            My React Tutorial
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              {navData.map((navitem) => {
                return <NavDropdown {...navitem} />;
              })}
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-primary p-5 text-white text-center fs-3 fw-bold text-capitalize mb-5">
        {title}
      </div>
    </>
  );
};

export default Jumbotron;
