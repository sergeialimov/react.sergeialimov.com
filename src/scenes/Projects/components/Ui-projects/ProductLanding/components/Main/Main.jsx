import React from 'react';

import { Features, Pricing } from './components';
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
    <Pricing />
  </main>
);

export default Main;
