import React from "react";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  toggleBtnMode,
  setOperationalTodo,
} from "../features/todo/todoSlice";
import { successToast } from "../features/toaster/toasterSlice";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const { id, text } = todo;

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
    dispatch(successToast("Todo Deleted"));
    dispatch(setOperationalTodo(null));
    dispatch(toggleBtnMode("ADD"));
  };

  const handleEditTodo = () => {
    dispatch(toggleBtnMode("EDIT"));
    dispatch(setOperationalTodo(todo));
  };

  return (
    <li className="mt-4 border flex justify-between items-center bg-zinc-800 px-4 py-3 rounded">
      <p className="text-lg">{text}</p>
      <div className="space-x-3">
        <button
          className="text-white bg-blue-500 border-0 py-3 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
          onClick={handleEditTodo}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
          </svg>
        </button>
        <button
          className="text-white bg-red-500 border-0 py-3 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
          onClick={() => handleDeleteTodo(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default Todo;
