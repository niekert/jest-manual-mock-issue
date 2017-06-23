import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import leftPad from 'utils/left-pad';

class App extends Component {
  render() {
    return (
      <span>
        {leftPad('Example', 5)}
      </span>
    );
  }
}

export default App;
