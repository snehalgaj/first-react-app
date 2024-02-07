const AddTodo = () => {
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div class="col-4">
          <input type="date" placeholder="01-01-1999" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
