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
      <div className="App">
        <div className="calculator">
          <h1 className="title">String Calculator</h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input-box"
            placeholder="Enter numbers"
          />
          <button onClick={handleAdd} className="calculate-btn">Calculate</button>
          {result !== null && <h2 className="result">Result: {result}</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;
