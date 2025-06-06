import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  const updateTodos = (newTodos) => {
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const handleAddTodo = (text) => {
    updateTodos([...todos, { id: Date.now(), text }])
  }

  const handleEditTodo = (id, newText) => {
    updateTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  const handleDeleteTodo = (id) => {
    updateTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList 
        todos={todos}
        onEdit={handleEditTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  )
}

export default App
