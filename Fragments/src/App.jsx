import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    // React.Fragment is used to wrap multiple elements without adding extra nodes to the DOM.
    <> 
      <div>
        <h1>List Items</h1>
        <ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </div>
    </> 
  );
}

export default App;