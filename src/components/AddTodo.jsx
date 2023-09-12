import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleBtnMode,
  setOperationalTodo,
  editTodo,
} from "../features/todo/todoSlice";
import { successToast, errorToast } from "../features/toaster/toasterSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const btnMode = useSelector((state) => state.todos.btnMode);
  const operationalTodo = useSelector((state) => state.todos.operationalTodo);

  const btnText = btnMode === "ADD" ? "Add Todo" : "Edit Todo";

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (input === "") {
      return dispatch(errorToast("Todo can't be empty"));
    }

    if (btnMode !== "ADD") {
      const todo = {
        id: operationalTodo?.id,
        text: input,
      };
      dispatch(editTodo(todo));
      dispatch(successToast("Todo Edited"));
      handleCancel();
    } else {
      dispatch(addTodo(input));
      dispatch(successToast("Todo Added"));
    }

    setInput("");
  };

  const handleCancel = () => {
    dispatch(toggleBtnMode("ADD"));
    dispatch(setOperationalTodo(null));
    setInput("");
  };

  useEffect(() => {
    operationalTodo ? setInput(operationalTodo?.text) : "";
    console.log("Running...");
  }, [operationalTodo]);

  return (
    <form onSubmit={addTodoHandler} className="flex gap-5">
      <input
        type="text"
        className="bg-gray-800 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-3 px-3 leading-3 transition-colors duration-200 ease-in-out flex-1"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {btnText}
      </button>

      {/* conditional button rendering */}
      {btnMode !== "ADD" ? (
        <button
          type="submit"
          className="text-white bg-red-500 border-0 py-3 px-4 focus:outline-none hover:bg-red-600 rounded text-lg"
          onClick={handleCancel}
        >
          Cancel
        </button>
      ) : (
        ""
      )}
    </form>
  );
};

export default AddTodo;
