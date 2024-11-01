import { useState } from "react";
import { VscAdd } from "react-icons/vsc";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const onNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const onDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const onAddChange = (event) => {
    event.preventDefault();
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={onAddChange}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter work"
            value={todoName}
            onChange={onNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={onDateChange} />
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
