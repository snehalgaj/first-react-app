import TodoItems from "./components/TodoItems";
import AddName from "./components/AddName";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  let todoItems = [
    {
      name: "Buy grocery",
      dueDate: "08/09/2024",
    },
    {
      name: "buy milk",
      dueDate: "05/08/2024",
    },
    {
      name: "study Hard",
      dueDate: "02/07/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AddName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}
export default App;
