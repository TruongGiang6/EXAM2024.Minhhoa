import { useState } from "react"
function TaskForm({isModalOn,onClose,onAdd})
{
    const[nameTask,setNameTask]=useState("")
    const[priority,setPriority]=useState("Low")
    function handleSubmit()
    {
        const newTask={
            id:Date.now(),
            name:nameTask,
            priority:priority
        }
        onAdd(newTask)
        setNameTask("")
       
        onClose()
    }
    return(
        <>
            <div className={`modal-overlay ${isModalOn?"modal-start":""}`}>
        <div className="modal-content d-flex flex-column gap-15">
            <p className="text-title">Add task</p>
            <div className="d-flex flex-column gap-10">
                <p className="label">Task</p>
                <input type="text" className="input" placeholder="Type your task here..."
                value={nameTask}
                onChange={(e)=>setNameTask(e.target.value)}
                />
            </div>
            <div className="d-flex flex-column gap-10">
                <p className="label">Priority</p>
                <div className="d-flex gap-10">
                    <button className="btn btn-high" 
                    onClick={()=>setPriority("High")}
                    >High</button>
                    <button className="btn btn-medium" 
                    onClick={()=>setPriority("Medium")}>Medium</button>
                    <button className="btn btn-low"
                    onClick={()=>setPriority("Low")}>Low</button>
                </div>
                <div className="d-flex flex-end">
                    <button className="btn bg-primary" onClick={handleSubmit}>Add</button>
                </div>
                <button className="btn-close" onClick={onClose}>X</button>
            </div>
        </div>
    </div>
        </>
    )
}
export default TaskForm