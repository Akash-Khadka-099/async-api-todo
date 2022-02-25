import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AllTodo from "./components/AllTodos";
import Todo from "./components/Todo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTodo />} />
        <Route path="/todos/:id" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
