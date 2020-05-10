import React from 'react';

// import 'improvement.css';

const Improvement = ({ content, forr, id, value }) => {
  return (
    <div class="checkbox-group">
      <div class="checkbox-item">
        <label class="checkbox-label" for={forr}>
          <input class="checkbox-input" id={id} type="checkbox" name="improve" value={value} />
          {content}
        </label>
      </div>
    </div>
  );
};

export default Improvement;
