import React from 'react';

// import 'improvement.css';

const Improvement = ({ content, forr, id, value }) => {
  return (
    <div className="checkbox-group">
      <div className="checkbox-item">
        <label className="checkbox-label" htmlFor={forr}>
          <input className="checkbox-input" id={id} type="checkbox" name="improve" value={value} />
          {content}
        </label>
      </div>
    </div>
  );
};

export default Improvement;
