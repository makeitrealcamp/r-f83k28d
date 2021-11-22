import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }
  onClickHandler() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.contador}</span>
        <button id="inc" onClick={() => this.onClickHandler()}>
          Incrementa
        </button>
      </div>
    );
  }
}

export default App;
