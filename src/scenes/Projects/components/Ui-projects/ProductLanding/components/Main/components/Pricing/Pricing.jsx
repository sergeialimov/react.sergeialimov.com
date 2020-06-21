import React from 'react';

import './pricing.css';

const Pricing = () => (
  <div className="pricing__container">
    <div className="pricing__price-block">
      <div className="pricing__price__header">TENOR TROMBONE</div>
      <p className="pricing__price">$600</p>
      <p className=".pricing__description">{'Lorem ipsum.\nLorem ipsum.\nLorem ipsum dolor.\nLorem ipsum'}</p>
      <div className="pricing__submit__wrapper">
        <input className="pricing__submit__button" type="submit" name="select" id="select-tenor" value="SELECT" />
      </div>
    </div>
    <div className="pricing__price-block">
      <div className="pricing__price__header">BASS TROMBONE</div>
      <p className="pricing__price">$900</p>
      <p className="pricing__description">{'Lorem ipsum.\nLorem ipsum.\nLorem ipsum dolor.\nLorem ipsum.'}</p>
      <div className="pricing__submit__wrapper">
        <input className="pricing__submit__button" type="submit" name="select" id="select-bass" value="SELECT" />
      </div>
    </div>
    <div className="pricing__price-block">
      <div className="pricing__price__header">VALVE TROMBONE</div>
      <p className="pricing__price">$1200</p>
      <p className="pricing__description">{'Lorem ipsum.\nLorem ipsum.\nLorem ipsum dolor.\nLorem ipsum.'}</p>
      <div className="pricing__submit__wrapper">
        <input className="pricing__submit__button" type="submit" name="select" id="select-valve" value="SELECT" />
      </div>
    </div>
  </div>
);

export default Pricing;
