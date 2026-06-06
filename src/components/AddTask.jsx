import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [taskName, setTaskName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ id: Date.now(), taskName, priority: 'Low', status: 'To Do' });
    setTaskName('');
  };

  return (
    <div className="p-4 rounded border shadow-sm">
      <h5 className="fw-bold mb-3">Add Task</h5>
      <form onSubmit={handleSubmit}>
        <input 
          className="form-control mb-3" 
          value={taskName} 
          onChange={e => setTaskName(e.target.value)} 
          placeholder="Type your task here..."
        />
        <button type="submit" className="btn btn-secondary">Add</button>
      </form>
    </div>
  );
}
export default AddTask;