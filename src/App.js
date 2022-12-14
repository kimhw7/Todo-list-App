import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Todolist from './page/Todolist';
import axios from 'axios';

function App() {
  const [ todoData, setTodoData ] = useState([])
  const [id, setId] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3001/todos')
    .then(res => {
      setTodoData(res.data)
      setId(res.data[res.data.length -1].id)
    })
    .catch(err => console.log(err))
  }, [todoData])

  const deleteTodo = function(id) {
    let newData = todoData.filter(el => el.id !== id);
    setTodoData(newData);

    axios.delete(`http://localhost:3001/todos/${id}`)
  }

  const plusTodo = function(id, body) {
    let newData = {
      "id": id,
      "body": body
    }

    axios.post('http://localhost:3001/todos/', newData)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/todolist"
          element={<Todolist todoData={todoData} setTodoData={setTodoData} deleteTodo={deleteTodo} plusTodo={plusTodo} id={id}/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
