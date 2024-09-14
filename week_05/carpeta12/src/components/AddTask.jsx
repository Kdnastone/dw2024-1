import React, { useState } from 'react';
import ButtonAtom from './BottonAtom';
import addIcon from '../assets/add.svg'; 

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <section>
      <h1>Agregar una tarea</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <ButtonAtom
          label="Agregar"
          onClick={handleSubmit}
          icon={addIcon}
        />
      </form>
    </section>
  );
};

export default AddTask;
//Ok