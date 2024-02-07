const TodoItems = () => {
  let item = "Buy Milk";
  let date = "02/04/2024";
  return (
    <div className="container">
      <div class="row kg-row">
        <div class="col-6">{item}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-6">Buy grocery</div>
        <div class="col-4">02/08/2024</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
