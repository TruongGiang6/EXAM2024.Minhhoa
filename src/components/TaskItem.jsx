import React from 'react';

const TaskItem = ({ task }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High': return 'priority-high';
      case 'Medium': return 'priority-medium';
      case 'Low': return 'priority-low';
      default: return '';
    }
  };

  return (
    <div className="task-item">
      <div className="task-section">
        <p className="label-small">Task</p>
        <p className="task-name-text">{task.name}</p>
      </div>
      <div className="task-section priority">
        <p className="label-small">Priority</p>
        <p className={`priority-text ${getPriorityClass(task.priority)}`}>{task.priority}</p>
      </div>
      <div className="status-badge">
        {task.status}
      </div>
      <div className={`status-indicator ${task.status === 'Done' ? 'done' : task.status === 'In Progress' ? 'progress' : ''}`}></div>
      <div className="action-btns">
        <i className="bi bi-pencil-square icon-btn"></i>
        <i className="bi bi-trash icon-btn delete"></i>
      </div>
    </div>
  );
};

export default TaskItem;