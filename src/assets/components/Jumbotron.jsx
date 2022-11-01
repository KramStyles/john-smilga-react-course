import React from "react";

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
              {/* <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  Link
                </a>
              </li> */}
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
