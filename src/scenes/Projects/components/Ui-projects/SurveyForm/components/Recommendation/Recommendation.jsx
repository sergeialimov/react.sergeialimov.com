import React from 'react';

import './recommendation.css';

const Recommendation = () => (
  <div className="radio-group">
    <div className="radio-item">
      <label className="radio-label" htmlFor="definitely">
        <input className="radio-input" id="definitely" type="radio" name="recommendation" value="1" />
        Definitely
      </label>
    </div>
    <div className="radio-item">
      <label className="radio-label" htmlFor="maybe">
        <input className="radio-input" id="maybe" type="radio" name="recommendation" value="2" />
        May be
      </label>
    </div>
    <div className="radio-item">
      <label className="radio-label" htmlFor="notsure">
        <input className="radio-input" id="notSure" type="radio" name="recommendation" value="3" />
        Not sure
      </label>
    </div>
  </div>
);

export default Recommendation;
