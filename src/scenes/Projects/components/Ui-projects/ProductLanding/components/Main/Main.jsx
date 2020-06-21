import React from 'react';

import { Features, GetStarted, Pricing } from './components';
import './main.css';

const Main = () => (
  <main className="product-landing__main">
    <h1 className="product-landing__header__h1">Handcrafted, home-made masterpieces</h1>
    <GetStarted />
    <Features />
    <div className="product-landing__how-it-works">
      <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/y8Yv4pnO7qc" frameBorder="0" allowFullScreen title="how-it-works" />
    </div>
    <Pricing />
  </main>
);

export default Main;
