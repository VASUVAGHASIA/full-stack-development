import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTask = () => {
    if (!task.trim()) return;

    if (editingIndex !== null) {
      const updated = [...tasks];
      updated[editingIndex] = task;
      setTasks(updated);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, task]);
    }

    setTask('');
  };

  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks = tasks.filter((t) =>
    t.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="todo-container">
      <h2>Get Things Done!</h2>

      <div className="input-area">
        <input
          type="text"
          placeholder="What is the task today?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddTask();
          }}
        />
        <button onClick={handleAddTask}>
          {editingIndex !== null ? 'Update' : 'Add Task'}
        </button>
      </div>

      <div className="search-area">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredTasks.length > 0 ? (
        filteredTasks.map((t, index) => (
          <div className="task" key={index}>
            <span>{t}</span>
            <div className="actions">
              <button onClick={() => handleEdit(tasks.indexOf(t))}>✏️</button>
              <button onClick={() => handleDelete(tasks.indexOf(t))}>🗑️</button>
            </div>
          </div>
        ))
      ) : (
        <p className="no-tasks">No matching tasks found.</p>
      )}
    </div>
  );
};

export default TodoApp;
