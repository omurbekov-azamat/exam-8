import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary bg-opacity-50">
      <div className="container p-2">
        <p className="navbar-brand m-0 me-5">Quotes Central</p>
        <div className="ms-5">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/quotes' className="nav-link">
                Quotes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/add-quote' className="nav-link">
                Submit new quote
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;