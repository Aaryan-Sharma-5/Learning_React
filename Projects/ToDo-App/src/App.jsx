import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
const todoItems = [{
  name: "Complete React",
  date: "25/12/24"
},
{
  name: "LeetCode",
  date: "25/12/24"
},
{
  name: "Codeforces",
  date: "25/12/24"
}
];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
