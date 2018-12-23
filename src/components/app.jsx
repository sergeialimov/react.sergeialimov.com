import React, { Component } from 'react';
import Header from './header.jsx';
import './../styles/app.css';

class App extends Component {
  componentDidMount() {
    document.body.style.margin = '0';
  }
  render() {
    return (
      <div id="app">
        <Header/>
      </div>
    )
  }
}

export default App;