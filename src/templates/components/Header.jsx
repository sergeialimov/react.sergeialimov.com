import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '@src/styles/header.css';


class Header extends Component {
  render() {
    return (
      <div>
        <nav id="navbar">
          <ul>
            <li>
              <NavLink
                className="nav-link"
                to="/"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
