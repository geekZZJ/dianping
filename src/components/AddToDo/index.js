import React, { Component } from "react";

export default class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <button onClick={() => this.handleClick()}>添加</button>
      </div>
    );
  }

  handleClick() {
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  }
}
