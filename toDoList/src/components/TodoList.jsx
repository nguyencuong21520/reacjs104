import TodoItem from './TodoItem'

function TodoList({ todos, onEdit, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className="todo-item">
          <TodoItem 
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  )
}

export default TodoList 