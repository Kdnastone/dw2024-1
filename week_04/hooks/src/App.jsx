// src/App.jsx
import React from 'react';
import TodoList from './components/ToDoList';

//mporta y utiliza el componente ToDoList
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
