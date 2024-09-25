import './App.css';
import React, { useState } from 'react';
import { add } from './utils/add';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error) {
      setResult(null);
      alert(error.message);
    }
  };
  return (
    <div className="App">
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
