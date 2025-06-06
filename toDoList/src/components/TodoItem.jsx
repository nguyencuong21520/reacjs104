import { useState } from 'react'

function TodoItem({ todo, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.text)

  const handleSave = () => {
    if (editValue.trim()) {
      onEdit(todo.id, editValue.trim())
      setIsEditing(false)
    }
  }

  if (isEditing) {
    return (
      <div className="edit-form">
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="edit-input"
        />
        <button onClick={handleSave} className="save-button">
          Save
        </button>
      </div>
    )
  }

  return (
    <>
      <span className="todo-text">{todo.text}</span>
      <div className="todo-actions">
        <button 
          onClick={() => setIsEditing(true)}
          className="edit-button"
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(todo.id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </>
  )
}

export default TodoItem 