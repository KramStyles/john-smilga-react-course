import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavDropdown = ({ name, links }) => {
  const routingName = name.replace(" ", "_");
  return (
    <>
      {links.length !== 0 ? (
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle text-capitalize fw-bold"
            to="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            {name}
          </Link>
          <ul className="dropdown-menu">
            {links.map((link) => {
              const routingLink = `${routingName}/${link.replace(" ", "_")}`;
              return (
                <li>
                  <Link
                    className="dropdown-item text-capitalize"
                    to={routingLink}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      ) : (
        <li className="nav-item">
          <Link className="nav-link text-capitalize" to={`/${routingName}`}>
            {name}
          </Link>
        </li>
      )}
    </>
  );
};

NavDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};

NavDropdown.defaultProps = {
  links: [],
};

export default NavDropdown;
