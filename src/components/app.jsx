import React, { Component } from 'react';
import Header from './header.jsx';
import Welcome from './welcome.jsx';
import Projects from './projects/projects.jsx';
import Social from './social.jsx';
import Footer from './footer.jsx';
import './../styles/app.css';

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