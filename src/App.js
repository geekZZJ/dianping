import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

const todoList = [
  {
    id: 1,
    title: "测试1",
    completed: false,
  },
  {
    id: 2,
    title: "测试2",
    completed: true,
  },
  {
    id: 3,
    title: "测试3",
    completed: false,
  },
];
const filter = "all";

function App() {
  return (
    <div>
      <AddToDo />
      <ToDoList todoList={todoList} />
      <Footer filter={filter} />
    </div>
  );
}

export default App;
