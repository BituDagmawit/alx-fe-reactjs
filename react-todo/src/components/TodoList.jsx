import React, { useState } from 'react';
import TodoItem from './TodoItem';

// Initial state with a few todos
const initialTodos = [
  { id: 1, text: 'Learn React Testing Library', completed: false },
  { id: 2, text: 'Implement Todo Component', completed: true },
  { id: 3, text: 'Write Unit Tests', completed: false },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoText, setNewTodoText] = useState('');

  // Handler for adding a new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;

    const newTodo = {
      id: Date.now(), // Simple unique ID
      text: newTodoText.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  // Handler for toggling a todo's completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Handler for deleting a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>My Todo List</h2>

      {/* Add Todo Form */}
      <form onSubmit={addTodo} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Add new todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          data-testid="todo-input"
          style={{ padding: '8px', width: '70%', marginRight: '10px' }}
        />
        <button type="submit" data-testid="add-button" style={{ padding: '8px 15px' }}>
          Add
        </button>
      </form>

      {/* Todo List */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;