import React from 'react';

const Header = () => (
  <header id="header">
    <img id="header-img" src="https://s3.amazonaws.com/freecodecamp/original_trombones.png" />
    <nav id="nav-bar">
      <ul>
        <li><a className="nav-link" href="#feature">Features</a></li>
        <li><a className="nav-link" href="#how-it-works">How it works</a></li>
        <li><a className="nav-link" href="#pricing">Pricing</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
