import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filter: "all",
    };
  }

  render() {
    const { filter } = this.state;
    const todoList = this.getFilteredTodoList();
    return (
      <div>
        <AddToDo addTodo={(title) => this.addTodo(title)} />
        <ToDoList
          todoList={todoList}
          toggleTodo={(id) => this.toggleTodo(id)}
        />
        <Footer
          filter={filter}
          setFilter={(filter) => this.setFilter(filter)}
        />
      </div>
    );
  }

  getFilteredTodoList() {
    const { todoList, filter } = this.state;
    return todoList.filter((item) => {
      if (filter === "all") {
        return true;
      }
      if (filter === "active") {
        return !item.completed;
      }
      return item.completed;
    });
  }

  addTodo(title) {
    const todoList = this.state.todoList;
    todoList.push({
      id: todoList.length + 1,
      title,
      completed: false,
    });
    this.setState({ todoList });
  }

  toggleTodo(id) {
    const todoList = this.state.todoList;
    const todo = todoList.find((item) => item.id === id);
    todo.completed = !todo.completed;
    this.setState({ todoList });
  }

  setFilter(filter) {
    this.setState({ filter });
  }
}
