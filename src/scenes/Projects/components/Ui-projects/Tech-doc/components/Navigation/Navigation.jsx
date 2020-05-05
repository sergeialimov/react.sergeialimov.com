import React from 'react';

import './navigation.css';


const Navigation = () => {
  return (
    <nav className="tech-doc__navigation">
      <header>
        <h1 className="tech-doc__navigation__header__h1">JS Documentation</h1>
      </header>
      <ul className="tech-doc__navigation__list">
        <li><a className="tech-doc__navigation__link" href="#Introduction">Introduction</a></li>
        <li><a className="tech-doc__navigation__link" href="#What_you_should_already_know">What you should already know</a></li>
        <li><a className="tech-doc__navigation__link" href="#Javascript_and_Java">JavaScript and Java</a></li>
        <li><a className="tech-doc__navigation__link" href="#Hello_world">Hello world</a></li>
        <li><a className="tech-doc__navigation__link" href="#Variables">Variables</a></li>
        <li><a className="tech-doc__navigation__link" href="#Declaring_variables">Declaring variables</a></li>
        <li><a className="tech-doc__navigation__link" href="#Variable_scope">Variable scope</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
