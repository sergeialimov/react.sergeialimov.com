import React, { Component } from 'react';
// import './../styles/projects.css';

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <h2>These are some of my projects..</h2>
        <div class="project-tile left-column">
          <a href="http://sergeialimov.com/projects/tribute-page.html" 
             target="_blank"
             rel="noopener noreferrer">
            <img className="project-pic" src="./../img/tribute.jpg" alt="Tribute page"/>
            <p className="project-name">Tribute page</p>
          </a>
        </div>
        <div class="project-tile right-column">
          <a href="http://sergeialimov.com/projects/survey-form.html" 
             target="_blank"
             rel="noopener noreferrer">
            <img class="project-pic" src="./img/survey.jpg" alt="Survey Form"/>
            <p class="project-name">Survey Form</p>
          </a>
        </div>
        <div class="project-tile left-column">
          <a href="http://sergeialimov.com/projects/tech-doc.html" 
          target="_blank"
          rel="noopener noreferrer">
            <img class="project-pic" src="./img/doc.jpg" alt="Technical documentation"/>
            <p class="project-name">Technical documentation</p>
          </a>
        </div>
        <div class="project-tile right-column">
          <a href="http://sergeialimov.com/projects/product-landing.html" 
             target="_blank"
             rel="noopener noreferrer">
            <img class="project-pic" src="./img/land.jpg" alt="Product landing page"/>
            <p class="project-name">Product landing page</p>
          </a>
        </div>
      </section>
    )
  }
}

export default Projects;