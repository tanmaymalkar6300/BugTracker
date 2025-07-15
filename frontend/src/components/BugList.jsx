function BugList({ bugs, onDelete, onResolve }) {
  if (!bugs.length) return <p>No bugs reported yet.</p>;

  const listStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const itemStyle = {
    backgroundColor: '#f9f9f9',
    padding: '12px 16px',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '8px',
  };

  const deleteButtonStyle = {
    backgroundColor: '#e53935',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const resolveButtonStyle = {
    backgroundColor: '#43a047',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <ul style={listStyle}>
      {bugs.map(bug => (
        <li key={bug.id} style={itemStyle}>
          <div>
            <strong style={{ fontSize: '16px' }}>{bug.title}</strong> - {bug.description} ({bug.priority})
            {bug.resolved && (
              <span style={{ color: 'green', marginLeft: '10px', fontWeight: 'bold' }}>[Resolved]</span>
            )}
          </div>
          {!bug.resolved && (
            <div style={buttonGroupStyle}>
              <button
                style={deleteButtonStyle}
                onClick={() => onDelete(bug.id)}
                onMouseOver={e => (e.target.style.backgroundColor = '#c62828')}
                onMouseOut={e => (e.target.style.backgroundColor = '#e53935')}
              >
                ❌ Delete
              </button>
              <button
                style={resolveButtonStyle}
                onClick={() => onResolve(bug.id, { ...bug, resolved: true })}
                onMouseOver={e => (e.target.style.backgroundColor = '#2e7d32')}
                onMouseOut={e => (e.target.style.backgroundColor = '#43a047')}
              >
                ✅ Resolve
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default BugList;
