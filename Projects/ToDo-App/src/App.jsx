function App() {
  return <center class = "todo-container">
    <h1>ToDo App</h1>
    <div class = "container text-center">
      <div class = "row">
        <div class="col-6">
          <input type="text" placeholder="Enter work" />
        </div>
        <div class="col-4">
        <input type="date" />
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-success">Add</button>
        </div>
      </div>

      <div class = "row">
        <div class="col-6">
          Complete React
        </div>
        <div class="col-4">
        25 / 12 / 2024
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>

      <div class = "row">
        <div class="col-6">
          LeetCode
        </div>
        <div class="col-4">
        25 / 12 / 2024
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </center>
}

export default App