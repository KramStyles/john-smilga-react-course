import React from "react";
import PropTypes from "prop-types";

const NavDropdown = ({ name, links }) => {
  return (
    <>
      <li class="nav-item">
        <a class="nav-link" href="javascript:void(0)">
          Link
        </a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          Dropdown
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Link
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another link
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              A third link
            </a>
          </li>
        </ul>
      </li>
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
