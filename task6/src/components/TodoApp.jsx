import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

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

  return (
    <div className="todo-container">
      <h2>Get Things Done !</h2>
      <div className="input-area">
        <input
          type="text"
          placeholder="What is the task today?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddTask();
            }
          }}
        />
        <button onClick={handleAddTask}>
          {editingIndex !== null ? 'Update' : 'Add Task'}
        </button>
      </div>
      {tasks.map((t, index) => (
        <div className="task" key={index}>
          <span>{t}</span>
          <div className="actions">
            <button onClick={() => handleEdit(index)}>✏️</button>
            <button onClick={() => handleDelete(index)}>🗑️</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
