import React, { Component } from 'react';
import '@src/styles/welcome.css';
import BaseTemplate from '@src/templates/Base';

const Welcome = (props) => {
  const content = (
    <section id="welcome-section">
        <h1>Hey I'am Sergei Alimov</h1>
        <h2 className="job-position">Remote Javascript developer</h2>
      </section>  
  );

  return (
    <BaseTemplate
      content={content}
    />
  );
}

export default Welcome;