import React from 'react'


export default function TodoItem({ todo, onToggle, onDelete }) {
const textStyle = {
textDecoration: todo.completed ? 'line-through' : 'none',
opacity: todo.completed ? 0.6 : 1,
}


return (
<li className="todo-item">
<label className="todo-left">
<input
type="checkbox"
checked={todo.completed}
onChange={() => onToggle(todo.id)}
/>
<span className="todo-text" style={textStyle}>
{todo.text}
</span>
</label>
<div className="todo-actions">
<button className="btn tiny" onClick={() => onDelete(todo.id)}>Hapus</button>
</div>
</li>
)
}