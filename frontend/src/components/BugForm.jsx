import { useState } from 'react';

function BugForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, priority });
    setTitle('');
    setDescription('');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        style={inputStyle}
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        style={inputStyle}
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <select
        style={selectStyle}
        value={priority}
        onChange={e => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#1976D2')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#2196F3')}
      >
        ➕ Add Bug
      </button>
    </form>
  );
}

export default BugForm;

// 🧠 Styles
const formStyle = {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  marginBottom: '20px',
  flexWrap: 'wrap'
};

const inputStyle = {
  padding: '8px 12px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '14px',
  flex: '1',
  minWidth: '200px'
};

const selectStyle = {
  padding: '8px 12px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '14px'
};

const buttonStyle = {
  backgroundColor: '#2196F3',
  color: 'white',
  border: 'none',
  padding: '10px 16px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold'
};
