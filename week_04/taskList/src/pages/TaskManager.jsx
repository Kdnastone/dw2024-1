//https://aptos.dev/en/build/guides/build-e2e-dapp/6-handle-tasks
import React from 'react';
import TaskForm from '../components/organisms/TaskForm.jsx';
import TaskList from '../components/molecules/TaskList.jsx';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import '../styles/pages/taskManager.scss';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEditTask = (taskId, newText) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, text: newText } : task
    ));
  };

  const handleViewTask = (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    alert(`Task: ${task.text}`);
  };

  return (
    <div className="taskManager">
      <TaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} onView={handleViewTask} />
    </div>
  );
};

export default TaskManager;