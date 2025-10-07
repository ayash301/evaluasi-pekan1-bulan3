import React from 'react';

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return <p className="empty-text">Belum ada tugas 😌</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={`todo-item ${todo.completed ? 'done' : ''}`}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
          </label>
          <button className="btn small danger" onClick={() => onDeleteTodo(todo.id)}>
            Hapus
          </button>
        </li>
      ))}
    </ul>
  );
}
