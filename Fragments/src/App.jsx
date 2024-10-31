import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let subjects = ["Maths", "Science", "English", "History", "Geography", "Computer Science"];
  return (
    // React.Fragment is used to wrap multiple elements without adding extra nodes to the DOM.
    <> 
      <div>
        <h1>Subjects</h1>
        <ul className ="list-group">
          {subjects.map(item =>  <li className="list-group-item">{item}</li>)}
        </ul>
      </div>
    </> 
  );
}

export default App;