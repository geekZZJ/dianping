import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todos";
import filterReducer from "./reducers/filter";
import textReducer from "./reducers/text";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
    text: textReducer
  }
});

export default store;