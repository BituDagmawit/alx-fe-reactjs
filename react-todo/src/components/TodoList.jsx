import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggle = id =>
    setTodos(todos.map(t => (t.id === id ? { ...t, done: !t.done } : t)));

  const del = id => setTodos(todos.filter(t => t.id !== id));

  return (
    <>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      {todos.map(t => (
        <div key={t.id} onClick={() => toggle(t.id)}>
          {t.text}
          <button onClick={() => del(t.id)}>X</button>
        </div>
      ))}
    </>
  );
}
