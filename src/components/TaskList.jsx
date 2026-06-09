import TaskItem from "./TaskItem"

function TaskList({taskList, onDelete, onEdit, onToggle}) { // Nhận thêm onToggle
    return(
        <section className="container d-flex flex-column gap-10">
        {
            taskList.map(item => (
            <TaskItem
                key={item.id}
                item={item}
                onDelete={onDelete}
                onEdit={onEdit}
                onToggle={onToggle} // Truyền xuống TaskItem
            />
            ))
        }
        </section>
    )
}
export default TaskList;