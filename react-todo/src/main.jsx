import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./components/TodoList";
import "./index.css"; // optional, if you have global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
