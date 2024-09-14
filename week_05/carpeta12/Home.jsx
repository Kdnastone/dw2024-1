import React, { useState } from 'react';
import AddTask from './src/components/AddTask';
import SeeTask from './src/components/SeeTask';

let nextId = 2;
const initialTasks = [
  { id: 0, title: 'Clase Mujeres Digitales', description: 'Estudiar conceptos: Hooks y Events', done: true },
  { id: 1, title: 'Hacer Ejercicio de Lista de notas', description: 'Desarrollar el ejercicio propuesto bajo los parámetros establecidos', done: false },
];

export default function TaskApp() {
  const [Tasks, setTasks] = useState(initialTasks);

  function handleAddTask(newTask) {
    setTasks([
      ...Tasks,
      {
        id: nextId++,
        title: newTask.title,
        description: newTask.description, 
        done: false,
      }
    ]);
  }

  function handleChangeTask(updatedTask) {
    setTasks(Tasks.map(t => {
      if (t.id === updatedTask.id) {
        return updatedTask;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTask(TaskId) {
    setTasks(
      Tasks.filter(t => t.id !== TaskId)
    );
  }

  return (
    <>
      <AddTask
        listTask={Tasks}
        setlistTask={setTasks}
        onAddTask={handleAddTask}
      />
      <SeeTask
        listTask={Tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
//Ok