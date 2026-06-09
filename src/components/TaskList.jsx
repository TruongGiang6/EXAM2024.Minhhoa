import TaskItem from "./TaskItem"
function TaskList({taskList,onDelete,onEdit})
{
    return(
        <>
        <section className="container d-flex flex-column gap-10">
        {
            taskList.map(item=>(
            <TaskItem
                key={item.id}
                item={item}
                onDelete={onDelete}
                onEdit={onEdit}
                
            />
            )
            )
        }
        </section>
        </>
    )
}
export default TaskList
