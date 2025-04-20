import { SET_TODO_TITLE } from "../actions/actionTypes";

const text = (state = "", action) => {
  switch (action.type) {
    case SET_TODO_TITLE:
      return action.title;
    default:
      return state;
  }
};

export default text;
