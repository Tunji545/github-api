import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = (e) => {
    this.setState({
      userInput: e.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.userInput.trim()) return;

    this.props.onSearch(this.state.userInput);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Enter the username:</p>
        <input
          type="text"
          name="userInput"
          value={this.state.value}
          onChange={this.handleInput}
        />
        <button>GO!</button>
      </form>
    );
  }
}

export default Form;
