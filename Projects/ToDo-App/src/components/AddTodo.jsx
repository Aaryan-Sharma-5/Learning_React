import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const onNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const onDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const onAddChange = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row">
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
          <button
            type="button"
            className="btn btn-success"
            onClick={onAddChange}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
