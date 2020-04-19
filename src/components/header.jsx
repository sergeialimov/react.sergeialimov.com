import React, { Component } from 'react';
import './../styles/header.css';

class Header extends Component {
  render() {
    return (
      <nav id="navbar">
        <ul>
          <li><a className="nav-link" href="#welcome-section">About</a></li>
          <li><a className="nav-link" href="#projects">Work</a></li>
          <li><a className="nav-link" href="#social">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default Header;