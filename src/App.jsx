import TodoItems from "./components/TodoItems";
import AddName from "./components/AddName";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AddName />
      <AddTodo />
      <div className="items-container">
        <TodoItems />
      </div>
    </center>
  );
}
export default App;
