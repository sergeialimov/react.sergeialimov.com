import React, { Component } from 'react';

import BaseTemplate from '@src/templates/Base';
import Project from './components';

import tribute from './components/ui-projects/Tribute-page/tribute.jpg';
import doc from './components/ui-projects/Tech-doc/doc.jpg';
import survey from './components/ui-projects/Survey-form/survey.jpg';
import land from './components/ui-projects/Product-landing/land.jpg';

import './projects.css';


const Projects = (props) => {
  const content = (
    <section id="projects">
      <div className="projects__content">
        <h1 className="projects__header-h1">Study projects</h1>
        <p className="projects__text">Most of my work results cannot be published because of NDA</p>
        <p className="projects__text">For that case, I've created the small "pet" projects to demonstrate my skills in web layouts</p>
        <p className="projects__text"></p>
        <p className="projects__text">The following projects were done while taking the course on Freecodecamp</p>
        <a className="projects__link" href="https://www.freecodecamp.org/learn" target="_blank">
          Responsive Web Design Certification
        </a>

        <h2 className="projects__header-h2">UI projects</h2>
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
        <h2 className="projects__header-h2">The code can be found on my Github account:</h2>
        <a className="projects__github-link" href="https://github.com/sergeialimov" target="_blank">https://github.com/sergeialimov</a>
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