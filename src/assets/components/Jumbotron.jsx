import React from "react";

import { navData } from "../data/data";
import NavDropdown from "./NavDropdown";

const Jumbotron = (props) => {
  const { title } = props;
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            My React Tutorial
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
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
