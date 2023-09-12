import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  btnMode: "ADD",
  operationalTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;

      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text };
        }
        return todo;
      });
    },
    toggleBtnMode: (state, action) => {
      state.btnMode = action.payload;
    },
    setOperationalTodo: (state, action) => {
      state.operationalTodo = action.payload;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  editTodo,
  toggleBtnMode,
  setOperationalTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
