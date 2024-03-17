/*Template generated by WebStorm on Tuesday (5/9/23), 5:45 PM.
 * Author: kramstyles
 * Filename: NavBar.jsx
 */

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } =
    useAuth0();
  isAuthenticated && sessionStorage.setItem("isGitUser", "true");

  const myLogOut = () => {
    sessionStorage.setItem("isGitUser", "false");
    logout({ returnTo: window.location.origin })
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">
          Github with Auth
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#authnavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="authnavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <span className="nav-link">
                {isAuthenticated && `@${user.name}`}
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link text-lowercase">
                <small>{isAuthenticated && `${user.email}`}</small>
              </span>
            </li>
          </ul>
          {isAuthenticated ? (
            <>
              <img
                src={user.picture}
                height={50}
                width={50}
                style={{ borderRadius: "50%", marginRight: 10 }}
                alt={user.nickname}
              />
              <button
                className="btn btn-primary"
                type="button"
                // onClick={() => logout({ returnTo: window.location.origin })}
                  onClick={myLogOut}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-primary"
                type="button"
                onClick={loginWithRedirect}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
