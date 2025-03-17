import React, { Component } from "react";

export default class ToDo extends Component {
  render() {
    const { title, completed, id, toggleTodo } = this.props;
    return (
      <div
        style={{ textDecoration: completed ? "line-through" : "none" }}
        onClick={() => toggleTodo(id)}
      >
        {title}
      </div>
    );
  }
}
