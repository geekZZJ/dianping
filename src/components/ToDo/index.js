import React, { Component } from "react";

export default class ToDo extends Component {
  render() {
    const { title, completed } = this.props;
    return (
      <div style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </div>
    );
  }
}
