import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul className="my-5">
      {todos.length !== 0 ? (
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <p className="text-lg text-center text-red-600">No Todos to Show</p>
      )}
    </ul>
  );
};

export default Todos;
