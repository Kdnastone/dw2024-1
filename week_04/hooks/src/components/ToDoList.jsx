import React, { useState, useEffect } from 'react';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Simulamos cargar datos iniciales desde una API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 5))); // Tomamos solo los primeros 5
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTodo}>Agregar</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
