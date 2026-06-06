import React, { useState } from 'react';

const AddTask = ({ onAdd, onClose }) => {
  const [newTaskName, setNewTaskName] = useState("");
  const [newPriority, setNewPriority] = useState("High");
  const [error, setError] = useState("");

  const handleAddTask = () => {
    if (newTaskName.trim().length === 0) {
      setError("Task name cannot be empty");
      return;
    }
    if (newTaskName.length > 100) {
      setError("Task name must not exceed 100 characters");
      return;
    }

    onAdd({
      name: newTaskName,
      priority: newPriority,
      status: "To Do"
    });

    setNewTaskName("");
    setNewPriority("High");
    setError("");
  };

  return (
    <div className="add-task-form">
      <div className="form-title">Add Task</div>
      <i className="bi bi-x-lg close-form" onClick={onClose}></i>
      
      <div className="form-group mb-3">
        <label className="label-small mb-1">Task</label>
        <input 
          type="text" 
          className={`form-control ${error ? "is-invalid" : ""}`}
          placeholder="Type your task here..." 
          value={newTaskName}
          onChange={(e) => {
            setNewTaskName(e.target.value);
            if (error) setError("");
          }}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>

      <div className="mb-4">
        <label className="label-small mb-1 d-block">Priority</label>
        <div className="p-btn-group">
          <button 
            type="button"
            className={`p-btn ${newPriority === "High" ? "active high" : ""}`}
            onClick={() => setNewPriority("High")}
          >High</button>
          <button 
            type="button"
            className={`p-btn ${newPriority === "Medium" ? "active medium" : ""}`}
            onClick={() => setNewPriority("Medium")}
          >Medium</button>
          <button 
            type="button"
            className={`p-btn ${newPriority === "Low" ? "active low" : ""}`}
            onClick={() => setNewPriority("Low")}
          >Low</button>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn-gray" onClick={handleAddTask}>Add</button>
      </div>
    </div>
  );
};

export default AddTask;
