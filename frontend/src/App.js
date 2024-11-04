import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5001/')
      .then(response => setMessage(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Dashboard App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
