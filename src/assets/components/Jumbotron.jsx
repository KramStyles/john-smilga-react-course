import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { navData } from "../data/data";
import NavDropdown from "./NavDropdown";

const Jumbotron = ({ title }) => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Last React Project
          </Link>
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
                return <NavDropdown {...navitem} key={navitem.name} />;
              })}
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-primary p-5 text-white text-center fs-3 fw-bold text-capitalize mb-5 mt-5">
        {title}
      </div>
    </>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Jumbotron;
