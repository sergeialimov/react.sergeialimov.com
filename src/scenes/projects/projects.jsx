import React, { Component } from 'react';

import BaseTemplate from '@src/templates/Base';
import Project from './components';

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
        <Project
          content="Tribute page"
          classNm="project-tile left-column"
          path="/projects/tribute-page"
          src={tribute}
        />
        <Project
          content="Survey Form"
          classNm="project-tile right-column"
          path="/projects/survey-form"
          src={survey}
        />
        <Project
          content="Technical documentation"
          classNm="project-tile left-column"
          path="/projects/tech-doc"
          src={doc}
        />
        <Project
          content="Product landing page"
          classNm="project-tile right-column"
          path="/projects/product-landing"
          src={land}
        />
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