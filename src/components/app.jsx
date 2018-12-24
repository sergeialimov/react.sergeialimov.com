import React, { Component } from 'react';
import Header from './header.jsx';
import Welcome from './welcome.jsx';
import Projects from './projects.jsx';
import './../styles/app.css';

class App extends Component {
  componentDidMount() {
    document.body.style.margin = '0';
  }
  render() {
    return (
      <div id="app">
        <Header/>
        <main id="main-doc">
          <Welcome/>
          <Projects/>
        </main>
      </div>
    )
  }
}

export default App;