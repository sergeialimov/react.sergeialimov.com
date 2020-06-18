import React from 'react';

import './improvement.css';

const Improvement = ({
  content, forr, id, value,
}) => (
  <div className="improvement__checkbox-group">
    <div className="improvement__checkbox-item">
      <input className="improvement__checkbox-input" id={id} type="checkbox" name="improve" value={value} />
      <label className="improvement__checkbox-label" htmlFor={forr}>
        {content}
      </label>
    </div>
  </div>
);

export default Improvement;
