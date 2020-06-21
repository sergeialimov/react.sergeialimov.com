import React from 'react';

const Pricing = () => (
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
);

export default Pricing;
