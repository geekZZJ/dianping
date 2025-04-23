import { connect } from "react-redux";
import ToDoList from "../components/ToDoList";
import { toggleTodo,fetchTodos } from "../reducers/todos";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  todoList: getVisibleTodos(state.todos.items, state.filter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
