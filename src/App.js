import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [apiQuestion, setApiQuestion] = useState('');

  const fetchQuestion = () => {
    Axios.get('https://opentdb.com/api.php?amount=1').then((res) => {
      setApiQuestion(res.data.results[0].question);
    });
  };

  return (
    <div className="App">
      <button onClick={fetchQuestion}>New Question</button>
      <p>{apiQuestion}</p>
    </div>
  );
}

export default App;
