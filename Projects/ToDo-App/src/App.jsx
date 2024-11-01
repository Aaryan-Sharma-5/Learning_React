import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  // const initialTodoItems = [{
  //   name: "Complete React",
  //   date: "25/12/24"
  // },
  // {
  //   name: "LeetCode",
  //   date: "25/12/24"
  // },
  // {
  //   name: "Codeforces",
  //   date: "25/12/24"
  // }
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const onNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const onDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={onNewItem}></AddTodo>
      <TodoItems todoItems={todoItems} onDeleteClick={onDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
