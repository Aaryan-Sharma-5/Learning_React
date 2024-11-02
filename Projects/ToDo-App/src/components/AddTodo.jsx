import { useState } from "react";
import { useContext } from "react";
import { VscAdd } from "react-icons/vsc";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { onNewItem } = useContext(TodoItemsContext);
  const toDoNameElement = useState();
  const toDoDateElement = useState();

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
            placeholder="Enter work"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
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
