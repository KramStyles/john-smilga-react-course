/*Template generated by WebStorm on Tuesday (5/9/23), 5:45 PM.
 * Author: kramstyles
 * Filename: NavBar.jsx
 */

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  useEffect(() => {
    console.log({
      isAuthenticated,
      loginWithRedirect,
      logout,
      user,
      isLoading,
    });
  }, []);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="javascript:void(0)">
          Github with Auth
        </a>
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
              <a className="nav-link" href="javascript:void(0)">
                Link
              </a>
            </li>
          </ul>
          {isAuthenticated ? (
            <>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="btn btn-primary"
              type="button"
              onClick={loginWithRedirect}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
