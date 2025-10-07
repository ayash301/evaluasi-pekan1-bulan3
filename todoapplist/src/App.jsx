import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

const uid = () => Date.now().toString() + Math.random().toString(36).slice(2, 8);

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem('todos_v1');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos_v1', JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    const newTodo = { id: uid(), text: text.trim(), completed: false };
    if (!newTodo.text) return;
    setTodos(prev => [newTodo, ...prev]);
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );

    const selected = todos.find(t => t.id === id);
    if (filter === 'all' && selected && !selected.completed) {
      setFilter('active');
    }
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(t => t.id !== id));
  }
function clearCompleted() {
  const hasCompleted = todos.some(t => t.completed);
  if (!hasCompleted) {
    alert('Tidak ada tugas yang sudah diselesaikan untuk dihapus.');
    return;
  }
  const confirmDelete = window.confirm('Apakah kamu yakin ingin menghapus semua tugas yang sudah diselesaikan?');
  if (confirmDelete) {
    setTodos(prev => prev.filter(t => !t.completed));
    alert('Semua tugas yang sudah diselesaikan berhasil dihapus ✅');
  }
}


  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <motion.div
      className="app-root"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <header className="app-header">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Todo anak rajin
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Simple to use
          </motion.p>
        </header>

        <main>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <TodoForm onAddTodo={addTodo} />

            <div className="controls-row">
              <TodoFilter filter={filter} onFilterChange={setFilter} />
              <button className="btn small" onClick={clearCompleted}>
                Clear Completed
              </button>
            </div>

            <TodoList
              todos={filteredTodos}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
            />
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
}
