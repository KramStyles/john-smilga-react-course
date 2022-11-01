import React from "react";
import PropTypes from "prop-types";

const NavDropdown = ({ name, links }) => {
  console.log(links);
  return (
    <>
      {links.length !== 0 ? (
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Link
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another link
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                A third link
              </a>
            </li>
          </ul>
        </li>
      ) : (
        <li className="nav-item">
          <a
            className="nav-link text-capitalize"
            href={`/${name.replace(" ", "_")}`}
          >
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
