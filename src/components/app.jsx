import React, { Component } from 'react';
import Header from './header.jsx';

class App extends Component {
  componentDidMount() {
    document.body.style.margin = '0';
  }
  render() {
    return (
      <div className="app">
        <Header/>
      </div>
    )
  }
}

export default App;