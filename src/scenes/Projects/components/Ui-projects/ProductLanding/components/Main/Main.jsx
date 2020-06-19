import React from 'react';

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

    <div id="feature" name="features">
      <div className="feature">
        <div className="icon">
          {/* <img src="./../../camera-icon.png" width="50" /> */}
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
