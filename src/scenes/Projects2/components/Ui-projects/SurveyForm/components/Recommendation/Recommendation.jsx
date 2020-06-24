import React from 'react';

import './recommendation.css';

const Recommendation = () => (
  <div className="recommendation__radio-group">
    <div className="recommendation__radio-item">
      <input className="recommendation__radio-input" id="definitely" type="radio" name="recommendation" value="1" />
      <label className="recommendation__radio-label" htmlFor="definitely">
        Definitely
      </label>
    </div>
    <div className="recommendation__radio-item">
      <input className="recommendation__radio-input" id="maybe" type="radio" name="recommendation" value="2" />
      <label className="recommendation__radio-label" htmlFor="maybe">
        May be
      </label>
    </div>
    <div className="recommendation__radio-item">
      <input className="recommendation__radio-input" id="notSure" type="radio" name="recommendation" value="3" />
      <label className="recommendation__radio-label" htmlFor="notsure">
        Not sure
      </label>
    </div>
  </div>
);

export default Recommendation;
