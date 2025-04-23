import "./App.css";
import AddToDo from "./containers/AddTodoContainer";
import ToDoList from "./containers/TodoListContainer";
import Footer from "./containers/FooterContainer";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <AddToDo />
        <ToDoList />
        <Footer />
      </div>
    );
  }
}
 