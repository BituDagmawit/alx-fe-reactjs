import './App.css';
import { useState } from 'react';
import SearchForm from './components/SearchForm';
import UserCard from './components/UserCard';
import Search from './components/Search';

function App(){
  const [user, setUser] = useState(null);
  return (
    <div style={{maxWidth:600, margin:'20px auto', fontFamily:'Arial'}}>
      <h1>GitHub User Search</h1>
      <SearchForm onResult={setUser} />
      <UserCard user={user} />
      <Search />
    </div>
  );
}
export default App;
