import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <span className="value">0</span>
        <button id="inc">Incrementa</button>
      </div>
    );
  }
}

export default App;
