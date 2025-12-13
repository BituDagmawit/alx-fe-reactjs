import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([{ text: "Learn React", done: false }]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input) return;
    setTodos([...todos, { text: input, done: false }]);
    setInput("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        placeholder="Add new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
            onClick={() => toggleTodo(index)}
          >
            {todo.text} <button onClick={() => deleteTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
