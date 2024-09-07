import React, { useEffect, useState } from 'react';
import TaksButtons from '../molecules/TaksButtons.jsx'; 
import Input from '../atoms/Input.jsx';
import Button from '../atoms/Button.jsx';
import '../../styles/molecules/taskList.scss';

const TaskList = ({ onCreate, onEdit, onDelete, onView }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTasks(data.slice(0, 5));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        title: newTask,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
      onCreate(newTaskObj);
    }
  };

  return (
    <div className="taskList">
        <form onSubmit={handleAddTask} className="taskForm">
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea"
          className="taskInput"
        />
        <Button
          text="Agregar"
          className="addTaskBtn"
        />
      </form>

       {tasks.map(task => (
        <TaksButtons
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
        />
      ))}
    </div>
  );
};

export default TaskList;