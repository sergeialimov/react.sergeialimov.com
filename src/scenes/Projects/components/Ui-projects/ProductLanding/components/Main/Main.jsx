import React from 'react';

import Features from './components';
// const iconPath = './../../../camera-icon.png';

const Main = () => (
  <main>
    <h1 id="title">Handcrafted, home-made masterpieces</h1>
    <div className="get-started">
      <form action="https://www.freecodecamp.com/email-submit" id="form" htmlFor="submit">
        <div>
          <input type="email" id="email" name="email" placeholder="Enter your email address" />
        </div>
        <div>
          <input type="submit" name="email" id="submit" value="GET STARTED" />
        </div>
      </form>
    </div>
    <Features />
    <div id="how-it-works">
      <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/y8Yv4pnO7qc" frameBorder="0" allowFullScreen title="how-it-works" />
    </div>
    <div id="pricing">
      <div className="price-block">
        <div className="price-header">TENOR TROMBONE</div>
        <p className="price">$600</p>
        <p className="description">{'Lorem ipsum.\nLorem ipsum.\nLorem ipsum dolor.\nLorem ipsum'}</p>
        <div className="select-wrap">
          <input className="select" type="submit" name="select" id="select-tenor" value="SELECT" />
        </div>
      </div>
      <div className="price-block">
        <div className="price-header">BASS TROMBONE</div>
        <p className="price">$900</p>
        <p className="description">{'Lorem ipsum.\nLorem ipsum.\nLorem ipsum dolor.\nLorem ipsum.'}</p>
        <div className="select-wrap">
          <input className="select" type="submit" name="select" id="select-bass" value="SELECT" />
        </div>
      </div>
      <div className="price-block">
        <div className="price-header">VALVE TROMBONE</div>
        <p className="price">$1200</p>
        <p className="description">{'Lorem ipsum.\nLorem ipsum.\nLorem ipsum dolor.\nLorem ipsum.'}</p>
        <div className="select-wrap">
          <input className="select" type="submit" name="select" id="select-valve" value="SELECT" />
        </div>
      </div>
    </div>
  </main>
);

export default Main;
