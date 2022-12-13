import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Todolist from './page/Todolist';
import axios from 'axios';

function App() {
  const [ todoData, setTodoData ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/todos', {method : "GET"})
    .then(res => res.json)
    .then(res => {
      setTodoData(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  const deleteTodo = function(id) {
    let newData = todoData.filter(el => el.id !== id);
    setTodoData(newData);

    axios.delete(`http://localhost:3001/todos/${id}`)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/todolist"
          element={<Todolist todoData={todoData} setTodoData={setTodoData} deleteTodo={deleteTodo}/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
