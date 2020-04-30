import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Header from '@src/templates/Header.jsx';
import Welcome from '@src/scenes/Welcome.jsx';
import Projects from '@src/scenes/projects/Projects.jsx';
import Social from '@src/scenes/Social.jsx';
import Footer from '@src/templates/Footer.jsx';
import '@src/styles/app.css';

class App extends Component {
  componentDidMount() {
    document.body.style.margin = '0';
  }
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/social">Social</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/social">
            <Social />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;
