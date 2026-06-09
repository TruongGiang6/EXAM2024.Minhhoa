import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import dataList from '../data.json'
import TaskForm from './components/TaskForm'
import Header from './components/Header'
import TaskList from './components/TaskList'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [taskList,setTaskList]=useState(dataList)
  const[isModalOn,setIsModalOn]=useState(false)
  function onModal()
  {
    setIsModalOn(true)
  }
  function handleAdd(newTask)
  {
    setTaskList([...taskList,newTask])
  }
  function handleDelete(id)
  {
    setTaskList(taskList.filter(item=>
      item.id!==id
    ))
  }
  function handleEdit(id,newName)
  {
    const newList=
      taskList.map(item=>
        item.id===id ? {...item,name:newName}:item
      )
    setTaskList(newList)
  }
  return (
    <>
      <Header onModal={onModal}/>
      <TaskList taskList={taskList} onDelete={handleDelete} onEdit={handleEdit}/>
      <TaskForm isModalOn={isModalOn} onClose={()=>setIsModalOn(false)} onAdd={handleAdd}/>
    </>
  )
}

export default App
