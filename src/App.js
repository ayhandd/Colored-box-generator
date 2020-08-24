import React, { useState } from 'react';
import Inputs from './components/inputs'
import Display from './components/display'
import './App.css';

function App() {
  const [color, setColor] = useState("");
  const [results, setResults] = useState("");
  return (
    <div className="App">
      <Inputs color={color} setColor={setColor} results={results} setResults={setResults}/>
      <Display results={results}/>
    </div>
  );
}

export default App;
