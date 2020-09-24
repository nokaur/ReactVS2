import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.State = {
      welcome: "This is State constuctor"
    };
  }

  changeMessage() {
    this.setState({
      welcome: "This is after click"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.State.welcome}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Welcome;
