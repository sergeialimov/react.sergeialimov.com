import React from 'react';

import { Features, GetStarted, Pricing } from './components';
import './main.css';

const Main = () => (
  <main className="product-landing__main">
    <h1 className="product-landing__header__h1">Handcrafted, home-made masterpieces</h1>
    <GetStarted />
    <Features />
    <HoItWorks />
    <Pricing />
  </main>
);

export default Main;
