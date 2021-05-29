import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <h1>The Rooster's</h1>
                  {/* <img src={logo} alt="logo" className="logo" /> */}
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="active_menu"
                        className="nav-link"
                        aria-current="page"
                        exact
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="active_menu"
                        className="nav-link"
                        exact
                        to="/menu"
                      >
                        Menu
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="active_menu"
                        className="nav-link"
                        exact
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
