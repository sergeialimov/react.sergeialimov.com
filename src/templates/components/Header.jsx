import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '@src/styles/header.css';


class Header extends Component {
  render() {
    return (
      <div>
        <nav id="navbar">
          <ul>
            <li>
              <Link className="nav-link" to="/">About</Link>
            </li>
            <li>
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li>
              <Link className="nav-link" to="/social">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
