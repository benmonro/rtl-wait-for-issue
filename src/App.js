import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showStuff, setShowStuff] = useState(false);
  function handleClick() {
    setTimeout(() => {

      setShowStuff(true);
    }, 500)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>click me</button>
        {showStuff && <div>Hello world</div>}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
