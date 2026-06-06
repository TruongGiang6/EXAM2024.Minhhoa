import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onOpenModal }) => {
  return (
    <div className="card-container">
      <div className="task-header">
        <h1>Task List</h1>
        <button className="btn-purple" onClick={onOpenModal}>
          <i className="bi bi-plus"></i> Add Task
        </button>
      </div>

      <div className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;