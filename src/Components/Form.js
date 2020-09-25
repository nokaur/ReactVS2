import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      textarea: "",
      Topic: "React"
    };
  }
  hangleUsernameChange = (event) => {
    this.setState({
      Username: event.target.value
    });
  };
  handlecommentchange = (event) => {
    this.setState({
      textarea: event.target.value
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      Topic: event.target.value
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.Username} ${this.state.textarea} ${this.state.Topic}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={this.state.Username}
            onChange={this.hangleUsernameChange}
          />
        </div>
        <br />
        <div>
          <label>Comments: </label>
          <textarea
            value={this.state.textarea}
            onChange={this.handlecommentchange}
          ></textarea>
        </div>
        <br />
        <div>
          <label>Topic:</label>
          <select value={this.state.Topic} onChange={this.handleTopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Javascript">Javascript</option>
          </select>
        </div>
        <br />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
