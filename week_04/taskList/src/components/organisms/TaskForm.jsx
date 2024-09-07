import React, { useState } from 'react';
import Input from '../atoms/Input.jsx';
import Button from '../atoms/Button.jsx';
import '../../styles/organisms/taskForm.css';

const TaskForm = ({ onSubmit }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onSubmit(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <Input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Nueva tarea"
        className="taskInput"
      />
      <Button
        text="Agregar Tarea"
        className="submitBtn"
      />
    </form>
  );
};

export default TaskForm;