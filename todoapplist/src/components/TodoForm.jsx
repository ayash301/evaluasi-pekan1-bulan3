import React, { useState } from 'react';

export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // cegah reload halaman
    const trimmed = text.trim();
    if (!trimmed) return;
    onAddTodo(trimmed);
    setText('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Goal kamu hari ini??"
        className="input"
      />
      <button type="submit" className="btn">
        Tambah
      </button>
    </form>
  );
}
