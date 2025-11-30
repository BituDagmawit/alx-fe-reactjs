import { useState } from 'react';
import { searchUser } from '../services/github';

export default function SearchForm({ onResult }) {
  const [q, setQ] = useState('');
  async function submit(e){
    e.preventDefault();
    if (!q) return;
    try {
      const data = await searchUser(q);
      onResult(data);
    } catch (err){
      onResult(null);
      alert('User not found or rate-limited');
    }
  }
  return (
    <form onSubmit={submit}>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="github username" />
      <button type="submit">Search</button>
    </form>
  );
}
