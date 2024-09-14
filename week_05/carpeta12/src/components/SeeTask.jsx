import React, { useState } from 'react';
import ButtonAtom from './BottonAtom';
import editIcon from '../assets/edit.svg';
import deleteIcon from '../assets/delete.svg';

const SeeTask = ({ listTask, onChangeTask, onDeleteTask }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedDescription, setEditedDescription] = useState('');

  const handleEditClick = (taskId) => {
    const task = listTask.find((item) => item.id === taskId);
    setEditingTaskId(taskId);
    setEditedDescription(task.description || '');
  };

  const handleSaveClick = (taskId, updatedTitle) => {
    onChangeTask({
      id: taskId,
      title: updatedTitle,
      description: editedDescription,
    });
    setEditingTaskId(null);
  };

  const handleCheckboxChange = (taskId) => {
    const updatedTask = listTask.find((item) => item.id === taskId);
    onChangeTask({ ...updatedTask, done: !updatedTask.done });
  };
  

  return (
    <div>
      <h1>Lista de tareas</h1>
      <ul className="task-list">
        {listTask.map((item) => (
          <li key={item.id} className="task-item">
            <div className="task-main">
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {editingTaskId === item.id ? (
                <>
                  <input
                    value={item.title}
                    onChange={(e) => handleSaveClick(item.id, e.target.value)}
                  />
                  <textarea
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                  ></textarea>
                  <ButtonAtom
                    label="Guardar"
                    onClick={() => handleSaveClick(item.id, item.title)}
                    icon={editIcon}
                  />
                </>
              ) : (
                <>
                  <div className="task-content">
                    <h2>{item.title}</h2>
                    <p>{item.description || 'Sin descripción'}</p>
                  </div>
                </>
              )}
            </div>
            <div className="task-actions">
              <ButtonAtom
                label="Editar"
                onClick={() => handleEditClick(item.id)}
                icon={editIcon}
              />
              <ButtonAtom
                label="Eliminar"
                onClick={() => onDeleteTask(item.id)}
                icon={deleteIcon}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeeTask;
//Ok