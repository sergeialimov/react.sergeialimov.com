import React from 'react';

const Features = () => (
  <div id="feature" name="features">
    <div className="feature">
      <div className="icon">
        <img src="./../../camera-icon.png" width="50" alt="alt" />
      </div>
      <div className="feature-text-part">
        <p className="feature-header">Premium Materials</p>
        <p className="feature-text">Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.</p>
      </div>
    </div>
    <div className="feature">
      <div className="icon">
        {/* <img src={iconPath} width="50" /> */}
      </div>
      <div className="feature-text-part">
        <p className="feature-header">Fast Shipping</p>
        <p className="feature-text">We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
      </div>
    </div>
    <div className="feature">
      <div className="icon">
        {/* <img src={iconPath} width="50" /> */}
      </div>
      <div className="feature-text-part">
        <p className="feature-header">Quality Assurance</p>
        <p className="feature-text">For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.</p>
      </div>
    </div>
  </div>
);

export default Features;
