import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import toasterReducer from "../features/toaster/toasterSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    toast: toasterReducer,
  },
});
