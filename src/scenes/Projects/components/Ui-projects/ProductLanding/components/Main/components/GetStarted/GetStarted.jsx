import React from 'react';

import './getStarted.css';

const GetStarted = () => (
  <div className="product-landing__get-started">
    <form action="https://www.freecodecamp.com/email-submit" className="product-landing__get-started__form" htmlFor="submit">
      <div>
        <input type="email" className="product-landing__get-started__email" name="email" placeholder="Enter your email address" />
      </div>
      <div>
        <input type="submit" name="email" className="product-landing__get-started__submit" value="GET STARTED" />
      </div>
    </form>
  </div>
);

export default GetStarted;
