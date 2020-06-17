import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
// import './base.styl';

const BaseTemplate = (props) => {
  const {
    content,
  } = props;
  return (
    <div className="base-template">
      <Header />
      <div className="base-template__content">{content}</div>
    </div>
  );
};

BaseTemplate.propTypes = {
  content: PropTypes.object,
};

export default BaseTemplate;
