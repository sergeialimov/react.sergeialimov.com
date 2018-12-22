import React, { Component } from 'react';
// import './../styles/header.css';

class Header extends Component {
  render() {
    return (
      <nav id="header">
        <ul>
          <li><a class="nav-link" href="#welcome-section">About</a></li>
          <li><a class="nav-link" href="#projects">Work</a></li>
          <li><a class="nav-link" href="#social">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default Header;