import React, { Component } from 'react';
import './about.css';
import BaseTemplate from '@src/templates/Base';

const About = (props) => {
  const content = (
    <section id="welcome-section">
      <h1>Hi, I'am Sergei Alimov</h1>
      <h2 className="job-position">Remote Javascript developer</h2>
    </section>
  );

  return (
    <BaseTemplate
      content={content}
    />
  );
}

export default About;