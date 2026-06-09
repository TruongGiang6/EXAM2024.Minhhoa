import { useState } from "react"
function TaskItem({ item, onDelete, onEdit }) {
    const [isEdit, setIsEdit] = useState(false)
    const [newName, setNewName] = useState(item.name)
    const [error, setError] = useState({ name: "" })
    function handleSave() {
        if (newName.trim()=== "") {
            setError({name:"Vui long khong dc de trong"})
            return
        }
        setError({name:""})
        onEdit(item.id, newName)
        setIsEdit(false)
    }
    return (
        <>
            <article className="d-flex space-between task-item">
                <div className="task-col">
                    <p className="label">Task</p>
                    {
                        isEdit ? (<input type="text" className="input"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                        
                        ) : <p>{item.name}</p>
                    }
                    {error.name && (<p className="text-error">{error.name}</p>)}
                </div>
                <div className="task-col">
                    <p className="label">Priority</p>
                    <p className={`color-${item.priority.toLowerCase()}`}>{item.priority}</p>
                </div>
                <div className="task-col justify-center">
                    <p className="label">Todo</p>
                </div>
                <div className="d-flex">
                    <div>
                        {
                            isEdit ? (<button className="btn bg-primary color-light" onClick={handleSave}>Luu</button>) :
                                <button className="btn btn-primary color-light" onClick={() => setIsEdit(true)}>Sua</button>
                        }


                    </div>
                    <div><button className="btn bg-high color-light" onClick={() => onDelete(item.id)}>Xoa</button></div>
                </div>
            </article>
        </>
    )
}
export default TaskItem