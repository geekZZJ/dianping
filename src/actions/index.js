import * as actionTypes from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (title) => ({
  type: actionTypes.ADD_TODO,
  id: nextTodoId++,
  title,
});

export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  id,
});

export const setFilter = (filter) => ({
  type: actionTypes.SET_FILTER,
  filter,
});

export const setTodoTitle = (title) => ({
  type: actionTypes.SET_TODO_TITLE,
  title,
});
