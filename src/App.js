import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

function App() {
  // counterNum is a variavble and the second element is the state counterNum is going to be
  let [counterNum, setCounterNum] = useState(10)
  window.setCounterNum = setCounterNum // this is giving it to the global window now it's a property the window can use

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {counterNum}
        </p>
        <button onClick={() => setCounterNum(counterNum + 1)} className='add-num'>Add</button>
        <button onClick={() => setCounterNum(counterNum - 1)} className='subtract-num'>subtract</button>
      </header>

    </div>
  );
}

export default App;
