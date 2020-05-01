import React, { Component } from 'react';

import BaseTemplate from '@src/templates/Base';

import tribute from './components/Tribute-page/tribute.jpg';
import doc from './components/Tech-doc/doc.jpg';
import survey from './components/Survey-form/survey.jpg';
import land from './components/Product-landing/land.jpg';
import './projects.css';


const Projects = (props) => {
  const content = (
    <section id="projects">
      <h1 className="projects__header-h1">These are some of my projects..</h1>
      <div id="project-tiles">
        <div className="project-tile left-column">
          <a href="http://sergeialimov.com/projects/tribute-page.html"
              target="_blank"
              rel="noopener noreferrer">
            <img className="project-pic" src={tribute} alt="Tribute page"/>
            <p className="project-name">Tribute page</p>
          </a>
        </div>
        <div className="project-tile right-column">
          <a href="http://sergeialimov.com/projects/survey-form.html"
              target="_blank"
              rel="noopener noreferrer">
            <img className="project-pic" src={survey} alt="Survey Form"/>
            <p className="project-name">Survey Form</p>
          </a>
        </div>
        <div className="project-tile left-column">
          <a href="http://sergeialimov.com/projects/tech-doc.html"
              target="_blank"
              rel="noopener noreferrer">
            <img className="project-pic" src={doc} alt="Technical documentation"/>
            <p className="project-name">Technical documentation</p>
          </a>
        </div>
        <div className="project-tile right-column">
          <a href="http://sergeialimov.com/projects/product-landing.html"
              target="_blank"
              rel="noopener noreferrer">
            <img className="project-pic" src={land} alt="Product landing page"/>
            <p className="project-name">Product landing page</p>
          </a>
        </div>
      </div>
    </section>
  );

  return (
    <BaseTemplate
      content={content}
    />
  );
}

export default Projects;