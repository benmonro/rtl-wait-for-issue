import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App({ callApi }) {
  const [showStuff, setShowStuff] = useState(false);
  useEffect(() => {
    setTimeout(() => { setShowStuff(true) }, 500)
  });
  function handleClick() {
    setTimeout(() => {

      callApi({ foo: "bar" });
    }, 500)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>click me</button>

        {showStuff && <div>stuff</div>}
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
