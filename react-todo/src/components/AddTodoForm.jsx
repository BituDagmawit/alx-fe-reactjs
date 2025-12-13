import { useState } from 'react';


export default function AddTodoForm({ onAdd }) {
const [text, setText] = useState('');


const submit = (e) => {
e.preventDefault();
if (!text.trim()) return;
onAdd(text);
setText('');
};


return (
<form onSubmit={submit}>
<input
placeholder="Add todo"
value={text}
onChange={(e) => setText(e.target.value)}
/>
<button type="submit">Add</button>
</form>
);
}