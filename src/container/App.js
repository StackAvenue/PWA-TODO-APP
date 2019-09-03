import React from 'react';
import './App.css';
import './addTask/AddTask'
import AddTask from './addTask/AddTask';
import ShowTask from './showTasks/ShowTasks'

function App() {
  return (
    <div className="App">
      <AddTask/>
      <ShowTask/>
    </div>
  );
}

export default App;
