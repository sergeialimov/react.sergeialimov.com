import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import About from '@src/scenes/About';
import Projects from '@src/scenes/Projects';
import Contacts from '@src/scenes/Contacts';
import './app.css';

class App extends Component {
  componentDidMount() {
    document.body.style.margin = '0';
  }
  render() {
    return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/projects/product-landing">
            <h2>product-landing</h2>;
          </Route>
          <Route path="/projects/survey-form">
            <h2>survey-form</h2>;
          </Route>
          <Route path="/projects/tech-doc">
            <h2>tech-doc</h2>;
          </Route>
          <Route path="/projects/tribute-page">
            <h2>tribute-page</h2>;
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
    </Router>
    )
  }
}

export default App;
