import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <h3>1st Number: </h3>
      <button>Incremet</button>
      <h3>2nd Number: </h3>
      <button>Incremet</button>
      <br/>
      <h3>Operation: </h3>
      <select title="operation">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <h2>Answer: </h2>
    </div>
  );
}

export default App;
