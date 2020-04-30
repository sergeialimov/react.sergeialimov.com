import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Header from './header.jsx';
import Welcome from './welcome.jsx';
import Projects from './projects/projects.jsx';
import Social from './social.jsx';
import Footer from './footer.jsx';
import '@src/styles/app.css';

class App extends Component {
  componentDidMount() {
    document.body.style.margin = '0';
  }
  render() {
    return (
      <div id="app">
        <Header/>
        <Welcome/>
        <Projects/>
        <Social/>
        <Footer/>
      </div>
    )
  }
}

export default App;