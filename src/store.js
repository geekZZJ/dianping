import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { addTodo, toggleTodo, setFilter, setTodoTitle } from "./actions";
const store = configureStore({
  reducer: rootReducer,
});

export default store;

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo("Learn Redux"));

store.dispatch(toggleTodo(0));

store.dispatch(setFilter("active"));

store.dispatch(setTodoTitle("Learn Redux1"));