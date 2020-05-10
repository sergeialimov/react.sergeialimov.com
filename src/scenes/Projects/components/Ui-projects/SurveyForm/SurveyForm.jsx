import React from 'react';

import Improvement from './components';

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

const SurveyForm = () => {
  const improvements = improvementsData.map((x) => {
    x = (
      <Improvement
        content={x}
        id={x}
        forr={x}
        value={improvementsData.indexOf(x)}
      />
    )
  })

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
            <input autoFocus type="text" id="name" placeholder="Enter your name" required size="45" />
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
            {/* <label for "role">Which option best describes your current role?</label> */}
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
            <div className="radio-group">
              <div className="radio-item">
                <label className="radio-label" htmlFor="definitely">
                  <input className="radio-input" id="definitely" type="radio" name="recommendation" value="1" />
                    Definitely
                </label>
              </div>
              <div className="radio-item">
                <label className="radio-label" htmlFor="maybe">
                  <input className="radio-input" id="maybe" type="radio" name="recommendation" value="2" />
                    May be
                </label>
              </div>
              <div className="radio-item">
                <label className="radio-label" htmlFor="notsure">
                  <input className="radio-input" id="notSure" type="radio" name="recommendation" value="3" />
                    Not sure
                </label>
              </div>
            </div>
          </div>
          <div className="labels">
            {/* <label for "role">What do you like most in FCC:</label> */}
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
              {`Things that should be improved in the future\n(Check all that apply):`}
            </label>
          </div>
          <div className="right-tab">
            {improvements}
          </div>
          <div className="labels labels-align-top">
            <label id="recommendation-label">Any Comments or Suggestions?</label>
          </div>
          <div className="right-tab">
            <textarea name="comment" rows="6" cols="10">Enter your comment here...</textarea>
          </div>
        </div>
        <div className="button-div">
          <button className="button" type="submit" id="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default SurveyForm;