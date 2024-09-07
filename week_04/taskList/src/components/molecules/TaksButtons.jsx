import React from 'react';
import Button from '../atoms/Button.jsx';
import TaskItem from '../atoms/TaskItem.jsx';
import '../../styles/molecules/taskButtons.css';

const TaksButtons = ({ task, onDelete, onEdit, onView }) => (
  <div className="taskButtons">
    <TaskItem task={task} />
    <Button text="Editar" onClick={() => onEdit(task.id)} className="editBtn" />
    <Button text="Eliminar" onClick={() => onDelete(task.id)} className="deleteBtn" />
    <Button text="Visualizar" onClick={() => onView(task.id)} className="viewBtn" />
  </div>
);

export default TaksButtons;