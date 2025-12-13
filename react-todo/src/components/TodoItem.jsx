import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const todoStyle = {
    cursor: 'pointer',
    textDecoration: todo.completed ? 'line-through' : 'none',
    color: todo.completed ? 'gray' : 'black',
  };

  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
      <span
        data-testid={`todo-text-${todo.id}`}
        onClick={() => toggleTodo(todo.id)}
        style={todoStyle}
      >
        {todo.text}
      </span>
      <button
        data-testid={`delete-button-${todo.id}`}
        onClick={() => deleteTodo(todo.id)}
        style={{ marginLeft: '10px', padding: '4px 8px' }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;