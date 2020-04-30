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