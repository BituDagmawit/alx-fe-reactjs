import { useState } from "react";

export default function TodoList() {
  // Initial todo required for tests
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false } 
  ]);

  const [input, setInput] = useState("");

  // Add new todo
  const addTodo = () => {
    if (!input) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  // Toggle completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={addTodo}>Add</button>

      {todos.map(todo => (
        <div key={todo.id} style={{ textDecoration: todo.done ? "line-through" : "none" }}>
          <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
      ))}
    </div>
  );
}
