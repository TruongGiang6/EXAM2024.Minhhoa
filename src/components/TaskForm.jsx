import { useState } from "react"

function TaskForm({isModalOn, onClose, onAdd}) {
    const [nameTask, setNameTask] = useState("")
    const [priority, setPriority] = useState("Low")

    function handleSubmit() {
        if (nameTask.trim() === "") return;
        
        const newTask = {
            id: Date.now(),
            name: nameTask,
            priority: priority,
            status: "ToDo", // Trạng thái mặc định
            completed: false // Giá trị mặc định
        }
        onAdd(newTask)
        setNameTask("")
        setPriority("Low")
        onClose()
    }

    return (
        <div className={`modal-overlay ${isModalOn ? "modal-start" : ""}`}>
            <div className="modal-content d-flex flex-column gap-15">
                <p className="text-title">Add task</p>
                <div className="d-flex flex-column gap-10">
                    <p className="label">Task</p>
                    <input type="text" className="input" placeholder="Type your task here..."
                    value={nameTask}
                    onChange={(e) => setNameTask(e.target.value)}
                    />
                </div>
                <div className="d-flex flex-column gap-10">
                    <p className="label">Priority</p>
                    <div className="d-flex gap-10">
                        <button className="btn-status btn-high" onClick={() => setPriority("High")}>High</button>
                        <button className="btn-status btn-medium" onClick={() => setPriority("Medium")}>Medium</button>
                        <button className="btn-status btn-low" onClick={() => setPriority("Low")}>Low</button>
                    </div>
                    <div className="d-flex flex-end mt-20">
                        <button className="btn-add-submit" onClick={handleSubmit}>Add</button>
                    </div>
                    <button className="btn-close" onClick={onClose}>X</button>
                </div>
            </div>
        </div>
    )
}
export default TaskForm;