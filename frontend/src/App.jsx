import { useEffect, useState } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import { getBugs, addBug, removeBug, resolveBug } from './api'; // ✅ added resolveBug

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    getBugs().then(res => setBugs(res.data));
  }, []);

  const handleAdd = (bug) => {
    addBug(bug).then(() => getBugs().then(res => setBugs(res.data)));
  };

  const handleDelete = (id) => {
    removeBug(id).then(() => getBugs().then(res => setBugs(res.data)));
  };

  const handleResolve = (id, updatedBug) => {
    resolveBug(id, updatedBug)
      .then(() => getBugs().then(res => setBugs(res.data)))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bug Tracker</h1>
      <BugForm onAdd={handleAdd} />
      <BugList bugs={bugs} onDelete={handleDelete} onResolve={handleResolve} />
    </div>
  );
}

export default App;
