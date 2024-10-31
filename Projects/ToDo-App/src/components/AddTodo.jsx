function AddTodo(){
  return (
    <div className = "container text-center">
      <div className = "row">
        <div className="col-6">
          <input type="text" placeholder="Enter work" />
        </div>
        <div className="col-4">
        <input type="date" />
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-success">Add</button>
        </div>
      </div>
    </div>
  ); 
}

export default AddTodo;