import React, { Component } from "react";

export default class AddToDo extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.title}
          onChange={(e) => this.props.setTodoTitle(e.target.value)}
        />
        <button onClick={() => this.handleClick()}>添加</button>
      </div>
    );
  }

  handleClick() {
    this.props.addTodo(this.props.title);
    this.props.setTodoTitle("");
  }
}
