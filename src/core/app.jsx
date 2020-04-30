import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Header from '@src/templates/header.jsx';
import Welcome from '@src/scenes/welcome.jsx';
import Projects from '@src/scenes/projects/projects.jsx';
import Social from '@src/scenes/social.jsx';
import Footer from '@src/templates/footer.jsx';
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