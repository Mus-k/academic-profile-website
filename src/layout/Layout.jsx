import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Layout = ({ open, menuOpen }) => {
  return (
    <header className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo-link">
          <p className="logo-p">
            {/* Dr. Abu Kamara <br /> */}
            <span className="data-scrience">Data scientist</span>
          </p>
        </NavLink>

        <ul className={open? "nav-menu active": "nav-menu"}>
          <li className="nav-item" onClick={menuOpen}>
            {/* <span>
              <i className="fa-solid fa-house"></i>
            </span> */}

            <NavLink to="/" className="nav-links" activeClassName="active">
            <span>
              <i className="fa-solid fa-house"></i>
            </span>
              {" "}
              Home
            </NavLink>
          </li>
          <li className="nav-item" onClick={menuOpen}>
            

            <NavLink
              to="/research"
              className="nav-links"
              activeClassName="active"
            ><span>
            <i className="fa-solid fa-book-open-reader"></i>{" "}
          </span>
              {" "}
              Research topics
            </NavLink>
          </li>

          <li className="nav-item" onClick={menuOpen}>
           

            <NavLink
              to="/teaching"
              className="nav-links teach"
              activeClassName="active"
            >
              {" "} <span>
              <i className="fa-solid fa-chalkboard"></i>{" "}
            </span>
              Teaching
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon"
         onClick={menuOpen}>
           
              <i className={open?"fas fa-times"
            :"fas fa-bars"}></i>
           
        </div>
      </div>
    </header>
  );
};
