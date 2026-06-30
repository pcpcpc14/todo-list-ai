import { useState } from 'react'

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(todo.text)

  function save() {
    onEdit(todo.id, text)
    setEditing(false)
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {editing ? (
        <input
          className="edit-input"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') save()
          }}
        />
      ) : (
        <span
          className={todo.completed ? 'completed' : ''}
          onDoubleClick={() => setEditing(true)}
        >
          {todo.text}
        </span>
      )}

      {editing ? (
        <button onClick={save}>Save</button>
      ) : (
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      )}
    </div>
  )
}

export default TodoItem
