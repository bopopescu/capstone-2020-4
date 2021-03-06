import React from "react";
import "./Navbar.css";
//import Logo from '../img/logo.png';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header-wrapper">
      <div className="main-header">
        <div className="nav-wrapper">
          <div className="nav-flex-first-items">
            <Link to="/">
              <img
                id="main-logo"
                src={require("../../img/YouHi_logo.png")}
                alt=""
              />
            </Link>
            <a href="http://localhost:3000" className="nav-youhi">
              YouHi
            </a>
          </div>
          <div className="nav-flex-second-items">
            <NavLink
              exact
              to="/"
              className="App-Nav"
              activeStyle={{ fontWeight: "bold", color: "white" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/description"
              className="App-Nav"
              activeStyle={{ fontWeight: "bold", color: "white" }}
            >
              Description
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
