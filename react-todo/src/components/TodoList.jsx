import { useState } from 'react';
import AddTodoForm from './AddTodoForm';


export default function TodoList() {
const [todos, setTodos] = useState([
{ id: 1, text: 'Learn React', completed: false },
{ id: 2, text: 'Write tests', completed: false },
]);


const addTodo = (text) => {
setTodos([...todos, { id: Date.now(), text, completed: false }]);
};


const toggleTodo = (id) => {
setTodos(
todos.map(t =>
t.id === id ? { ...t, completed: !t.completed } : t
)
);
};


const deleteTodo = (id) => {
setTodos(todos.filter(t => t.id !== id));
};


return (
<div>
<h1>Todo List</h1>
<AddTodoForm onAdd={addTodo} />
<ul>
{todos.map(todo => (
<li key={todo.id}>
<span
onClick={() => toggleTodo(todo.id)}
style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
>
{todo.text}
</span>
<button onClick={() => deleteTodo(todo.id)}>Delete</button>
</li>
))}
</ul>
</div>
);
}