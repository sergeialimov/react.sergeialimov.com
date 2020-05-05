import React from 'react';

import './navigation.css';


const Navigation = () => {
  return (
    <nav className="tech-doc__navbar">
      <header>
        <h1 className="tech-doc__header__h1">JS Documentation</h1>
      </header>
      <ul className="tech-doc__nav-list">
        <li><a className="tech-doc__nav-link" href="#Introduction">Introduction</a></li>
        <li><a className="tech-doc__nav-link" href="#What_you_should_already_know">What you should already know</a></li>
        <li><a className="tech-doc__nav-link" href="#Javascript_and_Java">JavaScript and Java</a></li>
        <li><a className="tech-doc__nav-link" href="#Hello_world">Hello world</a></li>
        <li><a className="tech-doc__nav-link" href="#Variables">Variables</a></li>
        <li><a className="tech-doc__nav-link" href="#Declaring_variables">Declaring variables</a></li>
        <li><a className="tech-doc__nav-link" href="#Variable_scope">Variable scope</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;