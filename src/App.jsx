import React, { useState, useEffect } from "react";
import "./App.css";
import initialData from "./data.json";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTasks(initialData);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container p-4">
      {/* Hiển thị danh sách Task */}
      <TaskList tasks={tasks} onOpenModal={openModal} />

      {/* Giao diện nhập task (hiện lên khi nhấn nút +) */}
      {isModalOpen && (
        <div className="modal-overlay">
          <AddTask onAdd={closeModal} onClose={closeModal} />
        </div>
      )}
    </div>
  );
}

export default App;