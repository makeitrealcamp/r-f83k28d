import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (){
    super ();
    this.increaseVal = this.increaseVal.bind(this);

    this.state = {
      val:  0
    }
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.val}</span>
        <button id="inc" onClick= {this.increaseVal}>Incrementa</button>
      </div>
    );
  }

  increaseVal() {
    this.setState ({
      val: this.state.val + 1
    });
  }
}

export default App;
