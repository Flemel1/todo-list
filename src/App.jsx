import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "./todo-slice";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const onRemove = (todo) => {
    dispatch(todoActions.removeTodo(todo));
  }

  const onOpenModal = () => {
    setIsOpen(true);
  }

  return (
    <div className="app">
      <h1>To Do List</h1>
      <button onClick={onOpenModal} type="button">Create To Do</button>
      {todos.length === 0 ? (
        <p>Sorry Your Nothing To Do For Now</p>
      ) : (
        todos.map((todo, index) => {
          return (
            <div key={index} className="card">
              <h2>{todo.title}</h2>
              <p>{todo.subtitle}</p>
              <button onClick={() => onRemove(todo)} type="button">Remove</button>
            </div>
          );
        })
      )}
      {isOpen && <Modal onClose={setIsOpen} />}
    </div>
  );
}

export default App;
