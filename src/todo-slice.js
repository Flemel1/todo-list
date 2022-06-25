import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addToDo(state, payload) {
      const { title, subtitle } = payload.payload;
      state.todos.push({
        title,
        subtitle,
      });
    },
    removeTodo(state, payload) {
      const { title, subtitle } = payload.payload;
      const newTodos = state.todos.filter(
        (todo) => todo.title !== title && todo.subtitle !== subtitle
      );
      state.todos = newTodos;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
