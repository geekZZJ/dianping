import { connect } from "react-redux";
import AddToDo from "../components/AddToDo";
import { addTodo } from "../reducers/todos";
import { setTodoTitle } from "../reducers/text";

const mapStateToProps = (state) => ({
  title: state.text,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (title) => dispatch(addTodo(title)),
  setTodoTitle: (title) => dispatch(setTodoTitle(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
