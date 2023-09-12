import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />

      <div className="min-w-[580px]">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
