import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      textarea: ""
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

  render() {
    return (
      <form>
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
          <select>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Javascript">Javascript</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Form;
