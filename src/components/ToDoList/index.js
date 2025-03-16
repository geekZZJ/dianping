import React, { Component } from "react";
import ToDo from "../ToDo";

export default class ToDoList extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <div>
        {todoList.map((item) => (
          <ToDo key={item.id} {...item} />
        ))}
      </div>
    );
  }
}
