import { useState } from "react"

function TaskItem({ item, onDelete, onEdit, onToggle }) {
    const [isEdit, setIsEdit] = useState(false)
    const [newName, setNewName] = useState(item.name)
    const [error, setError] = useState({ name: "" })

    function handleSave() {
        if (newName.trim() === "") {
            setError({name: "Vui lòng không để trống"})
            return
        }
        setError({name: ""})
        onEdit(item.id, newName)
        setIsEdit(false)
    }

    const getStatusBadge = (status) => {
        switch (status) {
            case "ToDo": return <span className="status-badge bg-todo">To Do</span>;
            case "InProgress": return <span className="status-badge bg-inprogress">In Progress</span>;
            case "Done": return <span className="status-badge bg-done">Done</span>;
            default: return null;
        }
    };

    return (
        <article className="task-item-card d-flex space-between align-center">
            <div className="task-col">
                <p className="small-label">Task</p>
                {
                    isEdit ? (
                        <input type="text" className="input mb-2"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                    ) : (
                        <p className={item.completed ? "text-task text-through" : "text-task"}>
                            {item.name}
                        </p>
                    )
                }
                {error.name && (<p className="text-error">{error.name}</p>)}
            </div>
            
            <div className="task-col flex-end">
                <p className="small-label">Priority</p>
                <p className={`color-${item.priority.toLowerCase()}`}>{item.priority}</p>
            </div>

            <div className="task-col flex-end align-center">
                <p className="small-label">Status</p>
                {getStatusBadge(item.status)}
            </div>

            {/* Cột Done: Checkbox tròn */}
            <div className="task-col justify-center align-center">
                <p className="small-label">Done</p>
                <div 
                    className={`circular-checkbox ${item.completed ? "checked" : ""}`}
                    onClick={() => onToggle(item.id)}
                />
            </div>

            {/* Cột Hành Động: Outlined Icons */}
            <div className="d-flex align-center flex-end gap-15 justify-center">
                {
                    isEdit ? (
                        <button className="btn-icon color-primary" onClick={handleSave}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </button>
                    ) : (
                        <button className="btn-icon icon-pencil" onClick={() => setIsEdit(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                        </button>
                    )
                }
                <button className="btn-icon icon-trash" onClick={() => onDelete(item.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
            </div>
        </article>
    )
}
export default TaskItem;