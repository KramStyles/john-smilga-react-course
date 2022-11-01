import React from "react";
import PropTypes from "prop-types";

const NavDropdown = ({ name, links }) => {
  const routingName = name.replace(" ", "_");
  return (
    <>
      {links.length !== 0 ? (
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-capitalize fw-bold"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            {name}
          </a>
          <ul className="dropdown-menu">
            {links.map((link) => {
              const routingLink = `${routingName}/${link.replace(" ", "_")}`;
              return (
                <li>
                  <a
                    className="dropdown-item text-capitalize"
                    href={routingLink}
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      ) : (
        <li className="nav-item">
          <a className="nav-link text-capitalize" href={`/${routingName}`}>
            {name}
          </a>
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
