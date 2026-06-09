import { useState } from 'react'
import dataList from '../data.json'
import TaskForm from './components/TaskForm'
import Header from './components/Header'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [todos, setTodos] = useState(dataList)
  const [isModalOn, setIsModalOn] = useState(false)

  function onModal() {
    setIsModalOn(true)
  }

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newName) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, name: newName } : todo
    ));
  };

  return (
    <>
      <div className="container">
        <Header onModal={onModal}/>
      </div>
      <TaskList 
        taskList={todos} 
        onDelete={deleteTodo} 
        onEdit={editTodo} 
        onToggle={toggleTodo} 
      />
      <TaskForm 
        isModalOn={isModalOn} 
        onClose={() => setIsModalOn(false)} 
        onAdd={addTodo}
      />
    </>
  )
}

export default App;