import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  SET_TODO_TEXT,
} from "../actions/actionTypes";

const initialState = {
  todos: [],
  filter: "all",
  text: "",
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case SET_TODO_TEXT:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

export default todoApp;
