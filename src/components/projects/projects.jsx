import React, { Component } from 'react';
import tribute from '../../img/tribute.jpg';
import doc from '../../img/doc.jpg';
import survey from '../../img/survey.jpg';
import land from '../../img/land.jpg';
import './../../styles/projects.css';

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <h2 id="projects-header">These are some of my projects..</h2>
        <div id="project-tiles">
          <div className="classNameproject-tile left-column">
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
    )
  }
}

export default Projects;