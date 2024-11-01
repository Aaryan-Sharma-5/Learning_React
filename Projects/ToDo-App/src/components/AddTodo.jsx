import { useState, useRef } from "react";
import { VscAdd } from "react-icons/vsc";

function AddTodo({ onNewItem }) {
  const toDoNameElement = useRef();
  const toDoDateElement = useRef();

  const onAddChange = (event) => {
    event.preventDefault();
    const todoName = toDoNameElement.current.value;
    const todoDate = toDoDateElement.current.value;
    toDoNameElement.current.value = "";
    toDoDateElement.current.value = "";
    onNewItem(todoName, todoDate);
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={onAddChange}>
        <div className="col-6">
          <input
            type="text"
            ref={toDoNameElement}
            placeholder="Enter work"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={toDoDateElement}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success">
            <VscAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
