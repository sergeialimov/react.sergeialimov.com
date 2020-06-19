import React, { Component } from 'react';

import { Improvement, Recommendation } from './components';

import './surveyForm.css';

const improvementsData = [
  'Front-end Projects',
  'Back-end Projects',
  'Data visualization',
  'Challenges',
  'Open Source Community',
  'Gitter help rooms',
  'Videos',
  'City Meetups',
  'Wiki',
  'Forum',
];

class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.getImprovements = this.getImprovements.bind(this);
  }

  getImprovements(data) {
    return data.map((x) => x = (
      <Improvement
        content={x}
        id={x}
        forr={x}
        value={data.indexOf(x)}
      />
    ));
  }

  render() {
    const improvements = this.getImprovements(improvementsData);

    return (
      <main>
        <h1 id="title">Survey Form</h1>
        <form id="survey-form">
          <p id="description">Let us know how we can improve freeCodeCamp</p>
          <div id="form-body">
            <div className="labels">
              <label htmlFor="name" id="name-label">* Name:</label>
            </div>
            <div className="right-tab">
              <input type="text" id="name" placeholder="Enter your name" required size="45" />
            </div>
            <div className="labels">
              <label htmlFor="email" id="email-label">* Email:</label>
            </div>
            <div className="right-tab">
              <input type="email" id="email" placeholder="Enter your Email" required size="145" />
            </div>
            <div className="labels">
              <label htmlFor="age" id="number-label">* Age:</label>
            </div>
            <div className="right-tab">
              <input type="number" id="number" placeholder="Age" required size="45" min="10" max="100" />
            </div>
            <div className="labels">
              <label htmlFor="role">Which option best describes your current role?</label>
            </div>
            <div className="right-tab">
              <select id="dropdown">
                <option value="select-an-option" disabled>Select an option</option>
                <option value="student" selected>Student</option>
                <option value="fullTimeJob">Full time job</option>
                <option value="fullTimeLearner">Full time learner</option>
                <option value="preferNotToSay">Prefer not to say</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="labels labels-align-top">
              <label id="recommendation-label">* How likely is that you would recommend freeCodeCamp to a friend?</label>
            </div>
            <div className="right-tab">
              <Recommendation />
            </div>
            <div className="labels">
              <label htmlFor="role">What do you like most in FCC:</label>
            </div>
            <div className="right-tab">
              <select id="like" value="Select an option" id="dropdown">
                <option value="select-an-option" selected disabled>Select an option</option>
                <option value="challenges">Challenges</option>
                <option value="projects">Projects</option>
                <option value="community">Community</option>
                <option value="open-source">Open Source</option>
              </select>
            </div>
            <div className="labels labels-align-top">
              <label id="recommendation-label">
                {'Things that should be improved in the future\n(Check all that apply):'}
              </label>
            </div>
            <div className="right-tab">
              {improvements}
            </div>
            <div className="labels labels-align-top">
              <label id="recommendation-label">Any Comments or Suggestions?</label>
            </div>
            <div className="right-tab">
              <textarea name="comment" rows="6" cols="10" defaultValue="Enter your comment here..." />
            </div>
          </div>
          <div className="button-div">
            <button className="button" type="submit" id="submit">Submit</button>
          </div>
        </form>
      </main>
    );
  }
}

export default SurveyForm;
