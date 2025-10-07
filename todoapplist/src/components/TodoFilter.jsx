import React from 'react';

export default function TodoFilter({ filter, onFilterChange }) {
  const buttons = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' }
  ];

  return (
    <div className="filter-group">
      {buttons.map((btn) => (
        <button
          key={btn.key}
          className={`filter-btn ${filter === btn.key ? 'active' : ''}`}
          onClick={() => onFilterChange(btn.key)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
